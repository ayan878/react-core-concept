# Counter App without using hook

### Class Component Definition

```javascript
class Counter extends React.Component {
  // ...
}
```

- `Counter` is a class component that extends `React.Component`, which means it inherits the features of a React component. This allows `Counter` to use React's lifecycle methods and state management.

### Constructor

```javascript
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
```

- **Constructor**: The constructor is a special method in JavaScript classes. It is called when an instance of the class is created. In React, the constructor is used to initialize the component's state and bind methods.
- **props**: `props` are properties passed to the component from its parent. They are used to pass data and event handlers down the component tree.
- **super(props)**: The `super` keyword is used to call the constructor of the parent class, which is `React.Component` in this case. This is necessary because it initializes the component and allows it to access `this.props`. If you want to use `this.props` in the constructor, you need to call `super(props)` first.
- **this.state**: The state is a special object in React components that holds data that may change over the component's lifecycle. The state is used to create dynamic and interactive components. Here, `this.state` is initialized with a single property `count` set to `0`.

### Example Breakdown

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
}
```

1. **Class Definition**: `Counter` is defined as a class that extends `React.Component`, making it a React component.
2. **Constructor**: The constructor method is defined, taking `props` as an argument. This is typical in React class components to initialize state and bind event handlers.
3. **super(props)**: The call to `super(props)` is necessary to ensure that the parent class's constructor is called, allowing `this` to be used in the constructor.
4. **State Initialization**: `this.state` is initialized with an object containing a single property `count` set to `0`. This means when the `Counter` component is first rendered, its state will have `count` equal to `0`.

### Why Use a Constructor?

- The constructor is used to set up the initial state of the component.
- It is also used to bind methods to the component instance if needed.
- It ensures that `props` are correctly passed to the parent class (`React.Component`).

### Example Usage

In the full example, the `Counter` component would use this state to display and update the counter value in the UI.

```javascript
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  setCount = (value) => {
    this.setState({ count: value });
  };

  render() {
    return (
      <div>
        <h1>No State</h1>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setCount(this.state.count + 1)}>+</button>
        <button onClick={() => this.setCount(0)}>RESET</button>
        <button onClick={() => this.setCount(this.state.count - 1)}>-</button>
      </div>
    );
  }
}

export default Counter;
```

In this example:

- The `Counter` component initializes its state in the constructor.
- The `setCount` method updates the state.
- The `render` method uses `this.state.count` to display the current count and provides buttons to modify the count.

# Counter App with using hook

## Hook

A Hook is a built-in function in React that allows you to "hook into" React features from functional components. Hooks enable you to use state and other React features without writing a class. They provide a powerful and flexible way to manage state, handle side effects, and reuse logic in React components.

### useState

useState is a built-in React hook that efficiently manages state within functional components.

here, we have destrutured the useState()
count is variable which hold the current state and setCount is a function which update the state on trigger

Syntax

```javaScript
const [count, setCount] = useState(0);
```

```JavaScript
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
export default App;
```

### useReducer

useReducer is also a built-in React hook which is use to manage the complex and related piece of data.

Syntax

```javaScript
const [state,dispatch]=useReducer(initalState,reducer)
```

In above expression,
**useReducer:\***
useReducer is a React hook used for state management. It accepts a reducer function and an initial state, returning the current state and a dispatch function.

**initialState:\***
initialState is the initial state value of your application. It's typically an object that contains all the initial values for the state variables.

**reducer function:\***
The reducer function is responsible for specifying how the application's state changes in response to actions dispatched to it. It takes two arguments: the current state (state) and an action object (action), and returns a new state.
state:

state represents the current state of your application. It's similar to the state object you manage with useState, but with more complex logic handled by the reducer function.
dispatch function:

dispatch is a function provided by useReducer that you use to send actions to the reducer. Actions are plain JavaScript objects that must have a type property to indicate the type of action being performed.

```javaScript
import React, { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return { ...state, count: state.count + action.payload };
      case "RESET":
        return initialState; // Reset to initial state
      case "DEC":
        return { ...state, count: state.count - action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INC", payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      <button onClick={() => dispatch({ type: "DEC", payload: 1 })}>-</button>
    </div>
  );
}

export default App;
```
### Context API


### Redux