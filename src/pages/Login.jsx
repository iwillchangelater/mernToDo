import React, { useContext, useState } from "react";
import css from "../css/style.module.css";
import { Link } from "react-router-dom";
import UserCtx from "../context/UserContext.jsx";

export default function Login() {
  const ctx = useContext(UserCtx);
  const emailHandler = (e) => {
    ctx.setState({ ...ctx.state, email: e.target.value });
  };
  const passwordHandler = (e) => {
    ctx.setState({ ...ctx.state, password: e.target.value });
  };
  const loginEventHandler = (e) => {
    e.preventDefault();
    ctx.login();
  };
  return (
    <div className={css.logForm}>
      <div className={css.form}>
        <div className={css.formField}>
          <label>Имэйл</label>
          <input
            type="email"
            name="email"
            className={css.input}
            onChange={emailHandler}
          />
        </div>
        <div className={css.formField}>
          <label>Нууц үг</label>
          <input
            type="password"
            name="password"
            className={css.input}
            onChange={passwordHandler}
          />
        </div>
        <div className={css.footer}>
          <p>
            Бүртэгүүлэх бол{" "}
            <Link className={css.link} to="/signup">
              <p>энд дарна уу</p>
            </Link>
          </p>
          <div className={css.btn} onClick={loginEventHandler}>
            Нэвтрэх
          </div>
        </div>
      </div>
      <Link to="/forget-password" className={css.link}>
        <p>Нууц үг сэргээх</p>
      </Link>
    </div>
  );
}
