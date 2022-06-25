import React, { useState } from "react";
import "./body.css";
import Tables from "./tables";
import Making from "./making";
let btnNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //버튼의 고유 값
let dif = 3;
let maked = Making(dif);
let numArray = maked[0]; //스도쿠 판
let ansArray = maked[1]; //스도쿠 정답
let startTime = new Date().getTime(); //시작 시간
let endTime = new Date().getTime(); // 종료 시간
function Body() {
  const [hintCnt, setHintCnt] = useState(3);
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
  function startGame(n) {
    dif = n;
    setHintCnt(3);
    startTime = new Date().getTime();
    maked = Making(dif);
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
    if (hintCnt === 0) {
      alert("힌트 사용 불가!");
      return;
    }
    setHintCnt((prev) => prev - 1);
    numArray[sdkIdx[0]][sdkIdx[1]].value = ansArray[sdkIdx[0]][sdkIdx[1]];
    setChg((prev) => !prev);
  }
  function test_showAns() {
    let admin = prompt("관리자 비밀번호 입력");
    if (admin === "0512") {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          numArray[i][j].value = ansArray[i][j];
        }
      }
      setChg((prev) => !prev);
    } else alert("비밀번호가 틀렸습니다");
  }
  return (
    <div className="body">
      <h1 className="showHint">
        남은 힌트 개수 {hintCnt} / 현재 난이도{" "}
        {dif === 2 ? "쉬움" : dif === 3 ? "보통" : "어려움"}
      </h1>
      <div className="header_button">
        <button onClick={() => startGame(2)}>쉬움</button>
        <button onClick={() => startGame(3)}>보통</button>
        <button onClick={() => startGame(4)}>어려움</button>
        <button onClick={endGame}>종료</button>
        <button onClick={hint}>힌트</button>
        <button onClick={test_showAns}>테스트용 정답버튼</button>
      </div>

      <div className="num_button">
        {buttons}
        <table border="1">
          <Tables currentIdx={sdkIdx} sdkBlocks={numArray} select={select} />
        </table>
      </div>
    </div>
  );
}
export default Body;
