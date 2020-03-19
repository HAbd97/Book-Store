import React from "react";
import "./App.css";
import BookCard from "./Card";
import AddBook from "./AddBook";
import {BrowserRouter as BR, Route} from "react-router-dom";
import Signin from "./SignIn";
import CategBook from "./CategCard";

class App extends React.Component {
  render() {
    return (
      <div>
      <BR>
      <Route exact path="/main" component={BookCard}/>
      <Route exact path="/AddBook" component={AddBook}/>
      <Route exact path="/" component={Signin}/>
      <Route exact path="/CategBook" component = {CategBook}/>
      </BR>
      </div>
    );
  }
}

export default App;
