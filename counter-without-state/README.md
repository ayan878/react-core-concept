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

