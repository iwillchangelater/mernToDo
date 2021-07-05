import axios from "axios";
import React, { useState } from "react";
const init = { token: null, email: null, password: null, password1: null };
const Context = React.createContext();

export const UserProvider = (props) => {
  const [state, setState] = useState(init);

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:4000/users", {
        email: state.email,
        password: state.password,
      });
      setState({ ...state, token: res.data.token });
    } catch (err) {
      console.log(err);
    }
  };
  const login = async () => {
    try {
      const res = await axios.post("http://localhost:4000/users/login", {
        email: state.email,
        password: state.password,
      });
      setState({ ...state, token: res.data.token });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Context.Provider value={{ state, setState, register, login }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
