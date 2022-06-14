import React from "react";
import './header.css'
import './body.js'
function Header(props){
    return(
        <div className="header">
            <h1 className="sudoku">Play Sudoku!</h1>
            <h1>{props.ans}</h1>
        </div>
    );

    
}

export default Header;