import SayHello from "../topics/001-SayHello";
import JSXBasics from "../topics/002-JSXBasics";
import { FuncComponent, ES6Component } from "../topics/004-ComponentsAndProps";

export default function Basics() {
  return (
    <>
      <SayHello />
      <JSXBasics />
      <FuncComponent name="Functional Component" />
      <ES6Component text="ES6 Component" />
    </>
  );
}
