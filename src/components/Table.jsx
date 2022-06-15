import axios from "axios";
import React, { useState, useEffect } from "react";
export default function Table(props) {
  const { list } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserId</th>
            <th scope="col">Title</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value) => (
            <tr key={value.id}>
              <th scope="row">{value.id}</th>
              <td>{value.userId}</td>
              <td>{value.title}</td>
              <td>{value.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
