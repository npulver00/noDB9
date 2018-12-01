import React from "react";
import "../App.css";

export default function CardInstrument(props) {
  return (
    <div className="eachCard">
      <h1>{props.brand}</h1>
      <img src={props.image} />
      <div>{props.type}</div>
      <div>{props.cost}</div>
      <div>{props.finishes}</div>
      <button onClick={() => props.userEdit(props.id)}>Edit</button>
      <input onChange={e => props.editInputBox(e)} />
      <button onClick={() => props.userDelete(props.id)}>Delete</button>
    </div>
  );
}
