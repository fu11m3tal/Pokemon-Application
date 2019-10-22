import React from 'react';
import axios from 'axios';
import BoardRow from './BoardRow.jsx';
import BoardSquare from './BoardSquare.jsx'


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      master: {
        a: [0,0,0],
        b: [0,0,0],
        c: [0,0,0]
      },
      one: {
        a: [0,0,0],
        b: [0,0,0],
        c: [0,0,0]
      },
      two: {
        a: [0,0,0],
        b: [0,0,0],
        c: [0,0,0]
      },
      show: false
    }
    this.handleSquareClick = this.handleSquareClick.bind(this);
    this.handleSquareColor = this.handleSquareColor.bind(this);
    this.handleBoardUpdate = this.handleBoardUpdate.bind(this);
  }

  handleSquareClick(e) {
    console.log(e.target)
    var { master, one, two} = this.state;
    var coordinates = e.target.id.split('');
    var row = coordinates[0];
    var column = Number(coordinates[1]);
    var updatedBoard = master;
    this.handleBoardUpdate(row, column);
    this.handleSquareColor(row, column);
  }

  handleBoardUpdate(row, column) {
    var { master, one, two, show } = this.state;
    var updatedMaster = master;
    updatedMaster[row][column] = 1;
    var show = !show
    this.setState = ({
      master: updatedMaster,
      show: true
    })
  }

  handleSquareColor(e) {
    
  }

  componentDidMount() {
  }

  render() { 
    var {master, one, two, show} = this.state;
    var {handleSquareClick} = this;
    var color = show ? "squareOn" : "squareOff";
    return (
      <div className="board">
        <BoardRow rowId="a" row={master.a} handleSquareClick={this.handleSquareClick}/>
        <BoardRow rowId="b" row={master.b} handleSquareClick={this.handleSquareClick}/>
        <BoardRow rowId="c" row={master.c} handleSquareClick={this.handleSquareClick}/> 
      </div>
    )
  }
}

export default Board;
