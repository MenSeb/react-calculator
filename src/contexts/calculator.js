import React, { createContext, useRef } from 'react'
import { element } from 'prop-types'
import { useCalculator } from '../hooks'
import { FUNCTIONS, OPERANDS, OPERATORS } from '../constants'

const CalculatorContext = createContext()

const { Consumer: CalculatorConsumer, Provider } = CalculatorContext

function CalculatorProvider ({ children, ...props })
{
  const inputs = useRef([ ...FUNCTIONS, ...OPERANDS, ...OPERATORS ])

  const { calculate, ...calculator } = useCalculator()

  return (
    <Provider value={{ inputs, ...calculator }}>
      <form className='Calculator' onClick={ calculate }>
        { children }
      </form>
    </Provider>
  )
}

CalculatorProvider.propTypes = {
  children: element.isRequired,
}

export {
  CalculatorConsumer,
  CalculatorContext,
  CalculatorProvider,
}