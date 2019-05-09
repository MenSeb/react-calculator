import React, { useContext, useMemo } from 'react'
import { CalculatorContext } from '../../contexts/calculator'

export default function CalculatorInputs ()
{
  const { inputs, mode } = useContext( CalculatorContext )

  console.log({ mode });


  const currentInputs = useMemo( () => inputs[ mode ], [ mode ] )

  return (
    <section id='CalculatorInputs' className={ mode }>
      { currentInputs }
    </section>
  )
}