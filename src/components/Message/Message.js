import React, { useContext } from 'react'
import { CalculatorContext } from '../../contexts/calculator';

export default function Message ()
{
  const { message } = useContext( CalculatorContext )

  return (
    <output className='Message'>
      { message }
    </output>
  )
}