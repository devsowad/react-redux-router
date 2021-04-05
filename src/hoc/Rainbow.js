import React from "react"

export default function Rainbow(WrappedComponent) {
  const colours = ["red", "pink", "orange", "blue", "green", "yellow"]
  const colour = colours[Math.floor(Math.random() * 5)]

  const className = `text-${colour}`

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}
