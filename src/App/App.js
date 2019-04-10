import React from 'react'
import { CalculatorProvider } from '../contexts/calculator'
import { Operands, Operators, Result } from '../components'

export default function App ()
{
  return (
    <div className='App'>
      <CalculatorProvider>

        <Result />

        <Operands />

        <Operators />

      </CalculatorProvider>
    </div>
  )
}