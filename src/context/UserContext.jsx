import axios from "axios";
import React, { useState } from "react";
const init = { token: null };
const Context = React.createContext();
const baseURL = "Http://localhost:4000/";

export const UserProvider = (props) => {
  const [state, setState] = useState(init);
  const register = async (email, password) => {
    try {
      const res = await axios.post(baseURL + "users", { email, password });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const login = async (email, password) => {
    try {
      const res = await axios.get(baseURL + "users", { email, password });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const ctxVar = { state, setState, register, login };
  return <Context.Provider value={ctxVar}>{props.children}</Context.Provider>;
};

export default Context;
