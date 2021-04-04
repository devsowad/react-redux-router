import React, { Component } from "react"
import AddNinja from "./AddNinja"
import Ninjas from "./Ninjas"

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "Black", id: 1 },
      { name: "Youshi", age: 20, belt: "Red", id: 2 },
      { name: "Crystal", age: 35, belt: "Green", id: 3 },
    ],
  }

  addNinja = ninja => {
    ninja.id = Math.random()
    const ninjas = [...this.state.ninjas, ninja]

    this.setState({
      ninjas,
    })
  }

  deleteNinja = id => {
    const ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })

    this.setState({
      ninjas,
    })
  }

  componentDidMount() {
    console.log("component mounted!")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated!", prevProps, prevState)
  }

  render() {
    return (
      <div>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App
