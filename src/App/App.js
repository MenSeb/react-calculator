import React, { useRef } from 'react'
import * as INPUTS from '../constants'
import { CalculatorProvider } from '../contexts/calculator'
import { Equation, Inputs, Message, Result } from '../components'

export default function App ()
{
  const { current: CalculatorInputs } = useRef(
    Object.entries( INPUTS ).map(
      ([ name, inputs ]) => (
        <Inputs
          key={ name }
          inputs={ inputs }
          className={ name }
        />
      )
    )
  )

  return (
    <div className='App'>
      <CalculatorProvider>

        <Equation />

        <Result />

        <Message />

        { CalculatorInputs }

      </CalculatorProvider>
    </div>
  )
}