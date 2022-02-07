import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className={classes.backGround}>
      <div className={classes.container}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
