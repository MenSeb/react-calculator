import React, { useContext, useMemo } from 'react'
import { CalculatorContext } from '../../contexts/calculator';

export default function CalculatorHelpers ()
{
  const { HELPERS } = useContext( CalculatorContext )

  const helpers = useMemo(
    () => Object.entries( HELPERS ).map(
      ([ value, title ]) => (
        <input
          key={ value }
          title={ title }
          type='button'
          value={ value }
        />
      )
    ),
    [ HELPERS ]
  )

  return (
    <section id='CalculatorHelpers'>
      { helpers }
    </section>
  )
}