import { useEffect, useState } from "react";
import firebase from "../utils/firebase";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoListArray = [];
      for (let key in todos) {
        todoListArray.push({ key, ...todos[key] });
      }
      setTodoList(todoListArray);
    });
  }, []);
  return (
    <div>
      <h1>Todo List item </h1>
      {todoList?.map((item) => {
        return <TodoListItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default TodoList;
