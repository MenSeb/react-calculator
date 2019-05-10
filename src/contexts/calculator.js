import React, { createContext, useRef } from 'react'
import { useCalculator } from '../hooks'
import { HELPERS, MODES, OPERANDS, OPERATORS, SCIFIS, TRIGOS } from '../constants'

const CalculatorContext = createContext()

const { Consumer: CalculatorConsumer, Provider } = CalculatorContext

function CalculatorProvider ( props )
{
  const { current: initial } = useRef({
    HELPERS,
    INPUTS: {
      operand: OPERANDS,
      operator: OPERATORS,
      scifi: SCIFIS,
      trigo: TRIGOS,
    },
    MODES,
  })

  const calculator = useCalculator()

  return (
    <Provider { ...props } value={{ ...initial, ...calculator }} />
  )
}

export {
  CalculatorConsumer,
  CalculatorContext,
  CalculatorProvider,
}