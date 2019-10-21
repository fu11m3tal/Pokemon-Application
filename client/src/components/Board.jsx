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
  }

  handleSquareClick(e) {
    console.log(e.target.id)
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
