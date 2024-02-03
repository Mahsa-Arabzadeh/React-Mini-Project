import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.addToCount = this.addToCount.bind(this);
    this.minusFromCount = this.minusFromCount.bind(this);
  }

  addToCount() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  minusFromCount() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  render() {
    return (
      <div>
        <section id="main">
          <div className="container">
            <h2 id="title">Counter App</h2>
            <h2 id="counter">{this.state.count}</h2>
            <div className="btns">
              <button id="plus" onClick={this.addToCount}>
                +
              </button>
              <button id="minus" onClick={this.minusFromCount}>
                -
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
