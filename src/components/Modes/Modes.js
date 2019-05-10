import React, { useContext, useMemo } from 'react'
import { CalculatorContext } from '../../contexts/calculator';

export default function CalculatorModes ()
{
  const { mode, MODES, setMode } = useContext( CalculatorContext )

  const modes = useMemo(
    () => Object.entries( MODES ).map(
      ([ value, title ]) => (
        <input
          aria-pressed={ value === mode }
          key={ value }
          title={ title }
          type='button'
          value={ value }
        />
      )
    ),
    [ mode, MODES ]
  )

  return (
    <section id='CalculatorModes' onClick={ setMode }>
      { modes }
    </section>
  )
}