import React from "react";

function FuncComponent(props) {
  return <h1>Olá, {props.name}</h1>;
}

class ES6Component extends React.Component {
  render() {
    return <h1>Olá, {this.props.text}</h1>;
  }
}

export { FuncComponent, ES6Component };
