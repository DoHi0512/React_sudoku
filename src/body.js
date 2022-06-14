import React, { useState, useEffect } from "react";
import "./body.css";
import Tables from "./tables";
import Making from "./making";
let btnNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //버튼의 고유 값
let maked = Making();
let numArray = maked[0]; //스도쿠 판
let ansArray = maked[1]; //스도쿠 정답
let startTime = new Date().getTime();
let endTime = new Date().getTime();
function Body(props) {
  const [hintCnt,setHintCnt] = useState(3);
  const [chg, setChg] = useState(true);
  const [sdkIdx, setSdkIdx] = useState([-1, -1]);
  const buttons = btnNum.map((num) => {
    return <button onClick={() => updateNode(num)}>{num}</button>;
  });

  function updateNode(num) {
    numArray[sdkIdx[0]][sdkIdx[1]].value =
      numArray[sdkIdx[0]][sdkIdx[1]].isBlank === false
        ? numArray[sdkIdx[0]][sdkIdx[1]].value
        : num;
    setChg((prev) => !prev);
  }
  function startGame() {
    setHintCnt(3);
    startTime = new Date().getTime();
    maked = Making();
    numArray = maked[0];
    ansArray = maked[1];
    setChg((prev) => !prev);
  }
  function endGame() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (numArray[i][j].value !== ansArray[i][j]) {
          alert("틀렸습니다");
          return;
        }
      }
    }
    endTime = new Date().getTime();
    let duration = endTime - startTime;
    let milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    alert(
      "정답입니다!!\n걸린 시간 : " +
        minutes +
        ":" +
        seconds +
        "." +
        milliseconds
    );
  }
  function select([ind, ind2]) {
    setSdkIdx(() => {
      //prev를 흰색으로 바꾸어야함
      return [ind, ind2];
    });
  }
  function hint() {
    if(hintCnt === 0){
      alert("힌트 사용 불가!");
      return;
    }
    setHintCnt(prev => prev - 1);
    numArray[sdkIdx[0]][sdkIdx[1]].value = ansArray[sdkIdx[0]][sdkIdx[1]];
    setChg((prev) => !prev);
  }
  return (
    <div className="body">
      <h1 className="showHint">남은 힌트 개수 {hintCnt}</h1>
      <div className="header_button">
        <button className="header_startButton" onClick={startGame}>
          시작
        </button>
        <button className="header_restartButton" onClick={endGame}>
          종료
        </button>
        <button className="header_hintButton" onClick={hint}>
          힌트
        </button>
      </div>
      <div className="num_button">
        {buttons}
        <table border="1">
          <Tables currentIdx={sdkIdx} sdkBlocks={numArray} select={select} />
        </table>
      </div>
      <h1>{props.ans}</h1>
    </div>
  );
}
export default Body;
