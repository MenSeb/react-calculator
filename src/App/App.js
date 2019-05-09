import React from 'react'
import { CalculatorProvider } from '../contexts/calculator'
import { CalculatorContainer } from '../containers'

export default function App ()
{
  return (
    <div id='Calculator'>
      <CalculatorProvider>

        <CalculatorContainer />

      </CalculatorProvider>
    </div>
  )
}