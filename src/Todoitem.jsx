import React from "react";

export default function Todo(props) {
  return <li onClick={() => props.checked(props.id)}>{props.todoItem}</li>;
}
