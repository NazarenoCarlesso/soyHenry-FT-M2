import React from 'react'

export default function Species (props) {
  const { species, handleSpecies, handleAllSpecies } = props
  return (
    <div>
      <h2>Species</h2>
      {species.map((s, i) => {
        return (
          <button key={i} onClick={handleSpecies} value={s}>
            {s}
          </button>
        )
      })}
      <button onClick={handleAllSpecies}>
        All Animals
      </button>
    </div>
  )
}
