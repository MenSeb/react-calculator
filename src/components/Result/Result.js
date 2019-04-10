import React, { useContext } from 'react'
import { CalculatorContext } from '../../contexts/calculator';

export default function Output ()
{
  const { result } = useContext( CalculatorContext )

  return (
    <output className='Output'>
      { result }
    </output>
  )
}