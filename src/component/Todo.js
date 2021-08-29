import React, { useState } from "react";
import TodoList from "./TodoList";
import firebase from "../utils/firebase";

const Todo = () => {
  const [data, setData] = useState({
    name: "",
    RollNo: ""
  });

  const handleOnChange = (e) => {
    var { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const hanleAddListner = (e) => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.push(data);
  };
  return (
    <div>
      Name:
      <input
        type="text"
        onChange={handleOnChange}
        name="name"
        value={data.name}
      />
      <br />
      <br />
      RollNo:
      <input
        type="number"
        onChange={handleOnChange}
        name="RollNo"
        value={data.RollNo}
      />
      <br />
      <br />
      <button onClick={hanleAddListner}>Add </button>
      <br />
      <br />
      <TodoList />
    </div>
  );
};

export default Todo;
