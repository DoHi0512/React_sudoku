import React, { useState, useEffect } from "react";
import "./body.css";
import Tables from "./tables";
import Making from "./making";
let btnNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //버튼의 고유 값
let numArray = Making(); //2차원 배열
console.log(numArray);
function Body(props) {
  const [chg, setChg] = useState(true);
  const [sdkIdx, setSdkIdx] = useState([-1, -1]);
  const [sdkBlocks, setSdkBlocks] = useState(numArray);

  const buttons = btnNum.map((num) => {
    return <button onClick={() => updateNode(num)}>{num}</button>;
  });

  function updateNode(num) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sdkBlocks[i][j].isBlank) {
          sdkBlocks[i][j].value =
            sdkIdx[0] === i && sdkIdx[1] === j ? num : sdkBlocks[i][j].value;
        }
      }
    }
    setChg((prev) => !prev);
  }

  function select([ind, ind2]) {
    setSdkIdx(() => {
      //prev를 흰색으로 바꾸어야함
      return [ind, ind2];
    });
  }


  return (
    <div className="body">
      <div className="num_button">
        {buttons}
        <table border="1">
          <Tables currentIdx={sdkIdx} sdkBlocks={sdkBlocks} select={select} />
        </table>
      </div>
      <h1>{props.ans}</h1>
    </div>
  );
}
export default Body;
