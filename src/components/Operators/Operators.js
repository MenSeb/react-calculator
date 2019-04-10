import React from 'react'
import { Inputs } from '..';
import { OPERATORS  } from '../../constants'

export default function Operators ()
{
  return (
    <Inputs inputs={ OPERATORS } className='operator' />
  )
}