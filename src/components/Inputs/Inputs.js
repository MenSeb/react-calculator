import React, { useContext, useMemo } from 'react'
import { CalculatorContext } from '../../contexts/calculator'

export default function CalculatorInputs ()
{
  const { INPUTS, mode } = useContext( CalculatorContext )

  const inputs = useMemo(
    () => Object.entries( INPUTS ).map(
      ([ category, inputs ]) => Object.entries( inputs ).map(
        ([ value, title ]) => (
          <input
            className={ category }
            key={ value }
            title={ title }
            type='button'
            value={ value }
          />
        )
      )
    ),
    [ INPUTS ]
  )

  return (
    <section id='CalculatorInputs' className={ mode }>
      { inputs }
    </section>
  )
}