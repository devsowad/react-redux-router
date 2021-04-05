import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Post from "./components/Post"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/post/:postId" component={Post}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
