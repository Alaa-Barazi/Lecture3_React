import React, { useState } from "react";
export default function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}
// Consider a simple application with the App component shown above. It returns a Parent component within a div element. Let’s look the Parent and Child components.
const Parent = () => {
  const [message, setMessage] = React.useState("Hello World");
  const chooseMessage = (message) => {
    setMessage(message);
  };
  return (
    <div>
      <h1>{message}</h1>
      <Child chooseMessage={chooseMessage} />
    </div>
  );
};
const Child = ({ chooseMessage }) => {
  let msg = "Goodbye";
  return (
    <div>
      <button onClick={() => chooseMessage(msg)}>Change Message</button>
    </div>
  );
};
// ! State in React
// ? What is State?
// State is a way to store data that belongs to a component. It is similar to props, but it is private and fully
//  controlled by the component.
// ? How to use State?
function App() {
  let count = 0;
  const setCount = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <label>{count}</label>
      <hr />
      <label>Counter</label>
      <button onClick={setCount}>{count}</button>
    </div>
  );
}
// ? With useState Hook
const [count, setCount] = useState(0);
return (
  <div>
    <label>{count}</label>
    <hr />
    <label>Counter</label>
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  </div>
);