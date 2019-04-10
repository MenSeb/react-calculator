import React from 'react'
import { Inputs } from '../';
import { OPERANDS  } from '../../constants'

export default function Operands ()
{
  return (
    <Inputs inputs={ OPERANDS } className='operand' />
  )
}