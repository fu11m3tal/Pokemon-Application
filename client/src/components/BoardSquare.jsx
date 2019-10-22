import React from 'react';
import axios from 'axios';

class BoardSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "squareOff"
    }
  }

  componentDidMount() {
  }

  render() { 
    var { rowId, columnId, square, handleSquareClick} = this.props;
    return (
      <div className="squareOn" id={rowId + columnId} onClick={handleSquareClick}></div>
    )
  }
}

export default BoardSquare;
