import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import useFetch from "../useFetch";
import { fetchUser } from "../utils";

export default function Utama(props) {
  // const { list } = useFetch("https://jsonplaceholder.typicode.com/todos");
  const user = fetchUser();

  const isLogin = user.isLoggedIn;
  localStorage.setItem("role", "USER");
  console.log(user);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto mt-5">
            <div className="card">
              <div className="card-body">
                {isLogin ? <p>login</p> : <p>not login</p>}
                {localStorage.getItem("role") !== "ADMIN" ? (
                  <p>Bukan admin</p>
                ) : (
                  <p>Admin</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
