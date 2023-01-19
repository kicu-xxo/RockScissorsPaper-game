
import { useState } from 'react';
import './App.css';
import Box from "./component/Box"


//박스2개 (타이틀, 사진, 결과값)
//가위바위보 버튼
//버튼을 클릭하면 클릭한 값이 박스에 보임
//컴퓨터는 랜덤하게 선택이 된다
//3, 4면의 결과를 가지고 승패를 따짐
//승패에 따라 테두리 변경

const choice = {//결과에 따른 이미지 객체
  rock: {
    name: 'Rock',
    img: 'https://cdn-icons-png.flaticon.com/512/5767/5767494.png'
  },
  scissors: {
    name: 'Scissors',
    img: 'https://cdn-icons-png.flaticon.com/512/5766/5766134.png'
  },
  paper: {
    name: 'Paper',
    img: 'https://cdn-icons-png.flaticon.com/512/5824/5824358.png'
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null); //user 선택 값
  const [computerSelect, setComputerSelect] = useState(null); //computer 선택 값
  const [result, setResult] = useState(""); //승무패

  const play = (userChoice) => { //button onClick에 사용
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgment(choice[userChoice], computerChoice));
  }

  const judgment = (user, computer) => { //승패에 따른 결과 값 리턴 함수
    console.log("user", user, "computer", computer);

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") 
      return computer.name == "Scissors" ? "win" : "lose";
      else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
      else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
    

  }

  const randomChoice = () => { //computer 랜덤하게 결과 불러내기 함수
    let itemArray = Object.keys(choice);//choice 객체에서 key값만 가져와 배열로 만듦
    console.log('item array', itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title= "You" item={userSelect} result={result}/>
        <Box title= "Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button className='button' onClick={()=>play('scissors')}>가위</button>
        <button className='button' onClick={()=>play('rock')}>바위</button>
        <button className='button' onClick={()=>play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
