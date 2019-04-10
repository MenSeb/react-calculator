import React, { createContext } from 'react'
import { useCalculator } from '../hooks'

const CalculatorContext = createContext()

const { Consumer: CalculatorConsumer, Provider } = CalculatorContext

function CalculatorProvider ({ children, ...props })
{
  const { calculate, ...calculator } = useCalculator()

  return (
    <Provider value={ calculator }>
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