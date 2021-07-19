import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function CharacterPage(){
  let { id } = useParams();
  const [characterData, setCharacterData] = useState("");

  useEffect(function () {
    fetch("https://www.breakingbadapi.com/api/characters/" + id)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setCharacterData(data);
      });
  }, []);
  return <div>
  <p>{characterData.name} </p>
  </div>
}

function Card(props) {
  return
    <Link to={`/character/${props.id}`}>
    <div className="card">
      <h4>Name: {props.character.name}</h4>
      <p>Birthday: {props.character.birthday}</p>
      <p>Status: {props.character.status}</p>
      <p>Nickname: {props.character.nickname}</p>
      <p>Occupation: {props.character.occupation}</p>
    </div>
  </Link>
};

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

    <Router>
    <Route path="/character/:id">
    <CharacterPage></CharacterPage>
    </Route>
    <Route to="/">
    <div className="App">
      {listCharacters.map(function (character) {
        return <Card character={character}></Card>;
      })}
    </div>


    </Route>
    </Router>
  );
}

export default App;
