import React, { useCallback, useContext, useMemo } from 'react'
import { CalculatorContext } from '../../contexts/calculator';

export default function CalculatorModes ()
{
  const { mode, MODES, setMode } = useContext( CalculatorContext )

  const updateMode = useCallback(
    ({ target: { value } }) => setMode(
      mode => value && mode !== value ? value : mode
    ),
    [ setMode ]
  )

  const modes = useMemo(
    () => Object.entries( MODES ).map(
      ([ value, title ]) => (
        <input
          key={ value }
          title={ title }
          type='button'
          value={ value }
          aria-pressed={ value === mode }
        />
      )
    ),
    [ mode, MODES ]
  )

  return (
    <section id='CalculatorModes' onClick={ updateMode }>
      { modes }
    </section>
  )
}