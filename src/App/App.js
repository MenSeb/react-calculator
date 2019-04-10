import React from 'react'
import { CalculatorProvider } from '../contexts/calculator'
import { Equation, Inputs, Message, Result } from '../components'

export default function App ()
{
  return (
    <div className='App'>
      <CalculatorProvider>

        <Equation />

        <Result />

        <Message />

        <Inputs />

      </CalculatorProvider>
    </div>
  )
}