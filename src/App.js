import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Story from "./drip/Story.js";
import style from "./main.css";
import Home from '/Users/erikkimsey/Desktop/OVO/src/home/Home.js';
import Root from '/Users/erikkimsey/Desktop/OVO/src/root/Root.js';

const App = () => {
    return (
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));