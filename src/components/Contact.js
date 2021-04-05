import React from "react"
import Rainbow from "../hoc/Rainbow"

const Contact = props => {
  //   setTimeout(() => {
  //     props.history.push("/about")
  //   }, 2000)
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is contact us page</p>
    </div>
  )
}

export default Rainbow(Contact)
