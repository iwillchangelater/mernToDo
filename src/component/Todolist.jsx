import React from "react";
import TodoListItem from "./TodoListItem";
export default function Todolist(props) {
  const data = [...props.data];
  return (
    <div>
      {data.map((el) => {
        return (
          <TodoListItem
            key={el["_id"]}
            delete={props.delete}
            id={el["_id"]}
            desc={el["describe"]}
          />
        );
      })}
    </div>
  );
}
