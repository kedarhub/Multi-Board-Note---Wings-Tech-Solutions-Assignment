// BoardList.js
import React, { Component, useContext, useState, useEffect } from 'react';
import { UserContext } from './App';
import BoardItem from './BoardItem';
import './BoardList.css'; 

class BoardList extends Component {
  static contextType = UserContext;

  state = {
    boards: [],
    newBoardName: '',
  };

  componentDidMount() {
    const { user } = this.context;
    if (user) {
     
      const userBoards = JSON.parse(localStorage.getItem(`boards-${user.username}`)) || [];
      this.setState({ boards: userBoards });
    }
  }

  handleCreateBoard = () => {
    const { user } = this.context;
    const { boards, newBoardName } = this.state;

    if (user) {
    
      const newBoard = {
        id: Date.now(),
        name: newBoardName,
        notes: [],
      };

      this.setState({ boards: [...boards, newBoard], newBoardName: '' });

     
      localStorage.setItem(`boards-${user.username}`, JSON.stringify([...boards, newBoard]));
    }
  };

  handleDeleteBoard = (boardId) => {
    const { user } = this.context;
    const { boards } = this.state;

    if (user) {
      const updatedBoards = boards.filter((board) => board.id !== boardId);
      this.setState({ boards: updatedBoards });

      localStorage.setItem(`boards-${user.username}`, JSON.stringify(updatedBoards));
    }
  };

  render() {
    const { user } = this.context;
    const { boards, newBoardName } = this.state;

    return (
      <div className="board-container">
        {user ? (
          <div>
            <h2>Welcome, {user.username}!</h2>
            <h3>Your Boards:</h3>
            <ul>
              {boards.map((board) => (
                <BoardItem key={board.id} board={board} onDelete={this.handleDeleteBoard} />
              ))}
            </ul>
            <div className="new-board-form">
              <input
                type="text"
                placeholder="New Board Name"
                value={newBoardName}
                onChange={(e) => this.setState({ newBoardName: e.target.value })}
              />
              <button onClick={this.handleCreateBoard}>Create Board</button>
            </div>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    );
  }
}

export default BoardList;
