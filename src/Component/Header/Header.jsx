import React from "react";
import logo from "../../assets/todologo.png";
import "./Header.css";

const Header = ({ onAddTodo, onDeleteCompleted, incompleteTaskCount }) => {
  return (
    <div>
      <div className="Header">
        <div className="left-section">
          <img src={logo} alt="" />
        </div>
        <div className="right-section">
          <div className="Common-buttons">
            <div style={{ color: "#fff", fontWeight: "300" }}>
              Incompleate Tasks {incompleteTaskCount}
            </div>
            <div className="delete-all">
              <button onClick={onDeleteCompleted}>Delete All</button>
            </div>
            <div className="Add-todo">
              <button onClick={onAddTodo}>Add Todo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
