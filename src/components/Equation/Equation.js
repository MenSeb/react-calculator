import React, { useContext } from 'react'
import { CalculatorContext } from '../../contexts/calculator'

export default function Equation ()
{
  const { equation } = useContext( CalculatorContext )

  return (
    <output className='Equation'>
      { equation }
    </output>
  )
}