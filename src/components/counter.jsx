import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };

  handleIncreament = () => {
    console.log("Increament Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncreament}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
