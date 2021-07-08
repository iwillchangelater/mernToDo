import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const ListContext = React.createContext();

export const ListProvider = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    lists: [],
    deleteId: null,
    todo: null,
  });
  const getLists = () => {
    const token = localStorage.getItem("token");
    console.log("token ", token);
    axios
      .get("http://localhost:4000/list", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data.data;
        console.log("get data ", data);
        setState({ ...state, lists: data });
        console.log("state list ", state.lists);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createList = (todo) => {
    const token = localStorage.getItem("token");
    console.log("token ", token);
    console.log("state todo ", todo);
    axios
      .post(
        "http://localhost:4000/list",
        { describe: todo },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log("create list", res);
        getLists();
      })
      .catch((err) => {
        console.log("create list error", err);
      });
  };
  const deleteList = (id) => {
    const token = localStorage.getItem("token");
    console.log("token ", token);
    axios
      .delete("http://localhost:4000/list/" + id, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        getLists();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ListContext.Provider
      value={{ state, setState, getLists, createList, deleteList, history }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
export default ListContext;
