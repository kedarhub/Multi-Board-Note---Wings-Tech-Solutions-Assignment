import React from 'react';
import { Link } from 'react-router-dom';

function BoardItem({ board, onDelete }) {
  return (
    <li>
      <Link to={`/boards/${board.id}`}>
        {board.name}
      </Link>
      <button onClick={() => onDelete(board.id)}>Delete</button>
    </li>
  );
}

export default BoardItem;
