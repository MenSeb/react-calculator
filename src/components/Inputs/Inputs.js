import React, { useContext } from 'react'
import { CalculatorContext } from '../../contexts/calculator'

export default function Inputs ()
{
  const { inputs } = useContext( CalculatorContext )

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