import React from 'react'
import { CalculatorProvider } from '../contexts'
import { Equation, Output, Message, Inputs } from '../components'

export default function App ()
{
  return (
    <div className='App'>

      <CalculatorProvider>

        <Equation />

        <Output />

        <Message />

        <Inputs />

      </CalculatorProvider>

    </div>
  )
}