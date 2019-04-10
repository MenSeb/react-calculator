import React from 'react'

export default function Inputs ()
{
  const inputs = []

  return inputs.map(
    input => (
      <input
        type='button'
        key={ input }
        value={ input }
        title={ input }
      />
    )
  )
}