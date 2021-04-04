import React from "react"

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 0 ? (
      <div key={ninja.id}>
        <h1>Name: {ninja.name}</h1>
        <h1>Age: {ninja.age}</h1>
        <h1>Belt: {ninja.belt}</h1>
        <button
          onClick={() => {
            deleteNinja(ninja.id)
          }}
        >
          delete
        </button>
      </div>
    ) : null
  })

  return <>{ninjaList}</>
}

export default Ninjas
