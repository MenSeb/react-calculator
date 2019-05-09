import React, { useContext } from 'react'
import { CalculatorContext } from '../../contexts/calculator';

export default function CalculatorHelpers ()
{
  const { helpers } = useContext( CalculatorContext )

  return (
    <section id='CalculatorHelpers'>
      { helpers }
    </section>
  )
}