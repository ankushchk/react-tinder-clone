import React from "react";
import './App.css';
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route path="/chats/:person">
      <Header backButton="/chats"/> 
      <ChatScreen />
      </Route>
      <Route path="/chats">
      <Header backButton="/"/>  
      <Chats />
      </Route>
      <Route path="/">
    <Header />
        
        <TinderCards />
        <SwipeButtons />
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
    