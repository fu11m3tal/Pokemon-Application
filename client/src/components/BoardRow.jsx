import React from 'react';
import axios from 'axios';
import BoardSquare from './BoardSquare.jsx'

class BoardRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: props.row
    }
  }

  componentDidMount() {
  }

  render() { 
    var {rowId, row, handleSquareClick} = this.props;
    return (
      <div className="row" id={rowId}>
        {row.map((square, index) => 
          <BoardSquare
            key={index}
            rowId={rowId}
            columnId={index}
            square={square}
            handleSquareClick={handleSquareClick}
          />
        )}
      </div>
    )
  }
}

export default BoardRow;
