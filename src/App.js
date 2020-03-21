import React from "react";
import "./App.css";
import BookCard from "./Card";
import AddBook from "./AddBook";
import { BrowserRouter as BR, Route } from "react-router-dom";
import Signin from "./SignIn";
import CategBook from "./CategCard";
import SearchBook from "./Search";
import Description from "./Description";

class App extends React.Component {
  render() {
    return (
      <div>
        <BR>
          <Route exact path="/main" component={BookCard} />
          <Route exact path="/AddBook" component={AddBook} />
          <Route exact path="/" component={Signin} />
          <Route exact path="/CategBook" component={CategBook} />
          <Route exact path="/Search" component={SearchBook} />
          <Route exact path="/Description" component={Description} />
        </BR>
      </div>
    );
  }
}

export default App;
