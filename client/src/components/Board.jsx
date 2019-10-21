import React from 'react';
import axios from 'axios';

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
      }
    }
    this.handleSquareClick = this.handleSquareClick.bind(this);
    this.handleSquareColor = this.handleSquareColor.bind(this);
    this.handleBoardUpdate = this.handleBoardUpdate.bind(this);
  }

  handleSquareClick(e) {
    var { master, one, two} = this.state;
    var coordinates = e.target.id.split('');
    var row = coordinates[0];
    var column = Number(coordinates[1])
    var updatedBoard = master;
    this.handleBoardUpdate(row, column)
  }

  handleBoardUpdate(row, column) {
    var { master, one, two} = this.state;
    var updatedMaster = master;
    updatedMaster[row][column] = 1;
    this.setState = ({
      master: updatedMaster
    })
  }

  handleSquareColor(e) {

  }

  componentDidMount() {
  }

  render() { 
    return (
      <div className="board">
        <div className="row" id="a">
          <div className="squareOff" id="a0" onClick={this.handleSquareClick}></div>
          <div className="squareOff" id="a1" onClick={this.handleSquareClick}></div>
          <div className="squareOff" id="a2" onClick={this.handleSquareClick}></div>
        </div>
        <div className="row" id="b">
          <div className="squareOff" id="b0" onClick={this.handleSquareClick}></div>
          <div className="squareOff" id="b1" onClick={this.handleSquareClick}></div>
          <div className="squareOff" id="b2" onClick={this.handleSquareClick}></div>
        </div>
        <div className="row" id="c">
          <div className="squareOff" id="c0" onClick={this.handleSquareClick}></div>
          <div className="squareOff" id="c1" onClick={this.handleSquareClick}></div>
          <div className="squareOff" id="c2" onClick={this.handleSquareClick}></div>
        </div>
      </div>
    )
  }
}

export default Board;
