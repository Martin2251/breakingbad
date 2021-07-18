import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function Card(props) {
  return (
    <div>
      <h4>Name: {props.character.name}</h4>
      <p>Birthday: {props.character.birthday}</p>
      <p>Status: {props.character.status}</p>
      <p>Nickname: {props.character.nickname}</p>
      <p>Occupation: {props.character.occupation}</p>
    </div>
  );
}

function App() {
  const [listCharacters, setListCharacters] = useState([]);

  useEffect(function () {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setListCharacters(data);
      });
  }, []);

  return (
    <div className="App">
      {listCharacters.map(function (character) {
        return <Card character={character}></Card>;
      })}
    </div>
  );
}

export default App;
