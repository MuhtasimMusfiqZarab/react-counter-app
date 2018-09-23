import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  }; // state is a property (set it to object) store data that the component needs

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };

  render() {
    return (
      // here () is used for multilined return
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button style={{ fontSize: 30 }} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div> // we can use React.Fragment instead of div because its the child of this
    );
    //line 8 and 9 is compiled to React.createElement... here h1 and button are two elements .... but for using div
    // .. here compiled to  React.createElement(div) .
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // return this.state.count===0 ? 'Zero' : this.state.count; instead of this
    // using object destructering we can write:
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
