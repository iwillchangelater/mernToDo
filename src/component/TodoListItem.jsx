import React from "react";
import css from "../css/style.module.css";
export default function TodoListItem(props) {
  return (
    <div className={css.listItem}>
      <input
        type="checkbox"
        className={css.checkBox}
        onClick={() => props.delete(props.id)}
      />
      <div>{props.desc}</div>
    </div>
  );
}
