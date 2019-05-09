import React from 'react'
import {
  CalculatorHelpers,
  CalculatorInputs,
  CalculatorModes,
  CalculatorOutputs
} from '../../components'

export default function CalculatorContainer ({ children, ...props })
{
  return (
    <form { ...props } id='CalculatorForm'>

      <CalculatorInputs />

      <section id='CalculatorSettings'>

        <CalculatorHelpers />

        <CalculatorModes />

      </section>

      <CalculatorOutputs />

    </form>
  )
}