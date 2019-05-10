import React, { useContext } from 'react'
import { CalculatorContext } from '../../contexts/calculator'

export default function CalculatorOutput ()
{
  const { equation, message, result } = useContext( CalculatorContext )

  return (
    <section id='CalculatorOutputs'>
      <output id='CalculatorMessage'>{ message }</output>
      <output id='CalculatorEquation'>{ equation }</output>
      <output id='CalculatorResult'>{ result }</output>
    </section>
  )
}