import React, { Component } from "react"

class Form extends Component {
  state = {
    name: "Devid",
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

  handleChange = e => {
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.name)
  }

  render() {
    return (
      <>
        <p onCopy={this.handleCopy}>
          My name is {this.state.name} and I am {this.state.age} year old.
        </p>
        <button onClick={this.handleClick}>click!</button>
        <button onMouseOver={this.handleMosueOver}>hover!</button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>submit</button>
        </form>
      </>
    )
  }
}

export default Form
