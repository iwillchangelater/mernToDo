import React, { UseContext, UseState } from "react";
import css from "./css/style.module.css";
import { Link } from "react-router-dom";
import UserCtx from "./context/UserContext";

export default function Signup() {
  const userContext = UseContext(UserCtx);
  const [email, setEmail] = UseState(null);
  const [password, setPassword] = UseState(null);
  const [password1, setPassword1] = UseState(null);
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const password1Handler = (e) => {
    setPassword1(e.target.value);
  };
  const registerEventhandler = (e) => {
    e.preventDefault();
    if (password === password1) {
      userContext.register(email, password);
    } else {
      console.log("nuuts ug zorson");
    }
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
            name="password1"
            className={css.input}
            onChange={passwordHandler}
          />
        </div>
        <div className={css.formField}>
          <label>Нууц үг дахин оруулна уу</label>
          <input
            type="password"
            name="password2"
            className={css.input}
            onChange={password1Handler}
          />
        </div>
        <div className={css.footer}>
          <p>
            Өөрийн хаягаар{" "}
            <Link className={css.link} to="/login">
              <p>Нэвтрэх</p>
            </Link>
          </p>
          <div className={css.btn} onClick={registerEventhandler()}>
            Бүртэгүүлэх
          </div>
        </div>
      </div>
      <Link to="/forget-password" className={css.link}>
        <p>Нууц үг сэргээх</p>
      </Link>
    </div>
  );
}
