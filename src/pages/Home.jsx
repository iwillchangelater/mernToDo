import React, { useContext, useEffect, useState } from "react";
import css from "../css/style.module.css";
import Todolist from "../component/Todolist";
import ListContext from "../context/ListContext";

export default function Home() {
  const listctx = useContext(ListContext);
  useEffect(() => {
    listctx.getLists();
  }, []);
  const [todo, setTodo] = useState("");
  if (!localStorage.getItem("token")) {
    listctx.history.replace("/");
    console.log(localStorage.getItem("token"));
  }
  const logoutHandler = () => {
    listctx.history.replace("/");
    localStorage.removeItem("token");
    console.log("logout");
  };
  const addBtnHandler = () => {
    if (todo === "" || !todo) {
      console.log("hooson baina");
    } else {
      console.log("todo", todo);
      listctx.createList(todo);
      console.log("created todo");
    }
  };
  return (
    <div className={css.home}>
      <header>
        TODO Lists
        <div className={css.btn} onClick={logoutHandler}>
          Гарах
        </div>
      </header>
      <div className={css.inputArea}>
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setTodo(e.target.value);
            console.log("todo oorchlogdow");
          }}
        />
        <div className={css.btn} onClick={addBtnHandler}>
          +
        </div>
      </div>
      <div className={css.content}>
        <Todolist
          data={listctx.state.lists}
          delete={listctx.deleteList}
        ></Todolist>
      </div>
    </div>
  );
}
