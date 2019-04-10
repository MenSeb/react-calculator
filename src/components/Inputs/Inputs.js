import React from 'react'
import propTypes from './types'

Inputs.propTypes = propTypes

export default function Inputs ({ inputs, ...props })
{
  return (
    <section { ...props }>
    {
      inputs.map(
        input => (
          <input
            type='button'
            key={ input }
            value={ input }
            title={ input }
            className='Input'
          />
        )
      )
    }
    </section>
  )
}