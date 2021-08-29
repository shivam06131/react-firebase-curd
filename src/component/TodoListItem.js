import { useState } from "react";
import firebase from "../utils/firebase";

const TodoListItem = ({ item }) => {
  const [update, setUpdate] = useState("");
  const handleDelete = () => {
    const todoRef = firebase.database().ref("Todo").child(item.key);
    todoRef.remove();
  };
  const handleChange = () => {
    const todoRef = firebase.database().ref("Todo").child(item.key);
    todoRef.update({
      name: update
    });
  };
  const handleUpdateChange = (e) => {
    setUpdate(e.target.value);
  };
  return (
    <div>
      <h1>Todo List item </h1>
      <div>
        <h4>{item.name} </h4>
        <p>{item.RollNo} </p>
        <input
          type="text"
          placeholder="changeName"
          value={update}
          onChange={handleUpdateChange}
        />
        <button onClick={handleChange}> change </button>
        <br />
        <br />
        <button onClick={handleDelete}> Delete </button>
        <p>----------------------------------</p>
      </div>
    </div>
  );
};

export default TodoListItem;
