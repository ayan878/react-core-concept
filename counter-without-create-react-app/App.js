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
    return React.createElement("div", { id: "parent" }, [
      React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Counter"),
        React.createElement("h2", {}, `${this.state.count}`),
      ]),
      React.createElement(
        "button",
        { id: "inc", onClick: () => this.setCount(this.state.count + 1) },
        "+"
      ),
      React.createElement(
        "button",
        { id: "reset", onClick: () => this.setCount(0) },
        "RESET"
      ),
      React.createElement(
        "button",
        { id: "dec", onClick: () => this.setCount(this.state.count - 1) },
        "-"
      ),
    ]);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
