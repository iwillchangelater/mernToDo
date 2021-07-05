import React from "react";
import css from "../css/style.module.css";
import { Link } from "react-router-dom";
import Todolist from "../component/Todolist";

export default function Home() {
  return (
    <div className={css.home}>
      <header>
        TODO Lists
        <div className={css.logout}>Гарах</div>
      </header>
      <div className={css.inputArea}>
        <input type="text" name="text" />
        <div className={css.btn}>+</div>
      </div>
      <div className={css.content}>
        <Todolist></Todolist>
      </div>
    </div>
  );
}
