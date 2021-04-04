import React, { Component } from "react"

class App extends Component {
  state = {
    name: "Marry",
    age: 15,
  }

  handleClick = () => {
    this.setState({
      name: "John",
      age: this.state.age + 5,
    })

    console.log(this.state.age)
  }

  handleMosueOver(e) {
    console.log(e.target, e.pageX, e.pageY)
  }

  handleCopy(e) {
    console.log(e)
  }

  render() {
    return (
      <div>
        <p onCopy={this.handleCopy}>
          My name is {this.state.name} and I am {this.state.age} year old.
        </p>
        <button onClick={this.handleClick}>click!</button>
        <button onMouseOver={this.handleMosueOver}>hover!</button>
      </div>
    )
  }
}

export default App
