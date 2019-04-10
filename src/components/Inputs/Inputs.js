import React from 'react'
import propTypes from './types'

Inputs.propTypes = propTypes

export default function Inputs ({ inputs, ...props })
{
  return inputs.map(
    input => (
      <input
        { ...props }
        type='button'
        key={ input }
        value={ input }
        title={ input }
        className={ className }
      />
    )
  )
  )
}