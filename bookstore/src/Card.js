/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { baseurl } from "./baseurl";
import axios from "axios";

class BookCard extends React.Component {
  constructor() {
    super();
    this.state = { BookList: "" };
  }
  componentDidMount() {
    axios.get(baseurl + "Book").then(
      result => {
        console.log(result.data);
        var BookList = result.data.map((list, index) => {
          console.log(list);
          return (
            <div class="card card_style col-lg-4 col-md-2 col-sm-1" key={list.BookName}>
              <div class="card-body">
                <h5 class="card-title">
                  {list.BookName}
                </h5>
                <h6 class="card-subtitle">{list.Category}</h6>
                <h6>{list.Author}</h6>
                <h6>{list.Cost}</h6>
                <a href="#" class="card-link">
                  <button class="btn btn-outline-primary">Buy</button>
                </a>
              </div>
            </div>
          );
        });
        this.setState({ BookList: BookList });
      },
      error => {
        console.log(error);
      }
    );
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div class="container-fluid">
          <div class="row">
            {this.state.BookList}
          </div>
        </div>
      </div>
    );
  }
}
export default BookCard;
