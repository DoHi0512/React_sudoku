import React from "react";
import './header.css'
import './body.js'
function Header(props){
    return(
        <div className="header">
            <h1>Play Sudoku!</h1>
            <div className="header_button">
                <button className="header_startButton" >시작</button>
                <button className="header_restartButton" >종료</button>
                
            </div>
            <h1>{props.ans}</h1>
        </div>
    );

    
}

export default Header;