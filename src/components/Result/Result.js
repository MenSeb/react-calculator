import React, { useContext } from 'react'
import { CalculatorContext } from '../../contexts/calculator';

export default function Result ()
{
  const { result } = useContext( CalculatorContext )

  return (
    <output className='Result'>
      { result }
    </output>
  )
}