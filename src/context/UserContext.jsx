import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const init = { token: null, email: null, password: null, password1: null };
const Context = React.createContext();

export const UserProvider = (props) => {
  const [state, setState] = useState(init);
  const token = state.token;
  const history = useHistory();
  if (localStorage.getItem("token")) {
    history.replace("/home");
  }
  const register = () => {
    axios
      .post("http://localhost:4000/users", {
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        setState({ ...state, token: res.data.token });
        localStorage.setItem("token", res.data.token);
        console.log("login token ", res.data.token);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const login = () => {
    axios
      .post("http://localhost:4000/users/login", {
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        setState({ ...state, token: res.data.token });
        localStorage.setItem("token", res.data.token);
        console.log("login state", res.data.token);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Context.Provider value={{ state, setState, register, login }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
