import React, { createContext, useRef } from 'react'
import { useCalculator } from '../hooks'
import { FUNCTIONS, OPERANDS, OPERATORS } from '../constants'

const CalculatorContext = createContext()

const { Consumer: CalculatorConsumer, Provider } = CalculatorContext

function CalculatorProvider ({ children, ...props })
{
  const { current: inputs } = useRef([ ...FUNCTIONS, ...OPERANDS, ...OPERATORS ])

  const { calculate, ...calculator } = useCalculator()

  return (
    <Provider value={{ inputs, ...calculator }}>
      <form className='Calculator' onClick={ calculate }>
        { children }
      </form>
    </Provider>
  )
}

export {
  CalculatorConsumer,
  CalculatorContext,
  CalculatorProvider,
}