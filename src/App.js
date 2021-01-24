// import logo from "./logo.svg";
import React from "react";
import "./App.css";
// import ShoppingList from "components/ShoppingList";
// import Car from "components/Car";
import Garage from "components/Garage";
import Header from "components/Header";
import Football from "components/Foodball";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* 
          <ShoppingList /> 
          <Car color="red" />
        */}
        <Garage />
        <Header />
        <Football />
      </div>
    );
  }
}
