import React from "react";
import css from "../css/style.module.css";
export default function TodoListItem(props) {
  return (
    <div className={css.listItem}>
      <input type="checkbox" className={css.checkBox} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
        architecto sapiente repellendus provident voluptatum corrupti commodi
        facere natus dolor nemo?
      </p>
    </div>
  );
}
