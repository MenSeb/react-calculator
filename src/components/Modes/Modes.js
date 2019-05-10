import React, { useCallback, useContext, useMemo } from 'react'
import { CalculatorContext } from '../../contexts/calculator';

export default function CalculatorModes ()
{
  const { mode, MODES, setCalculator } = useContext( CalculatorContext )

  const update = useCallback(
    ({ target: { value } }) => setCalculator(
      calculator =>
      {
        const { mode } = calculator

        if ( !value || value === mode ) return calculator

        return { ...calculator, mode: value }
      }
    ),
    []
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
    <section id='CalculatorModes' onClick={ update }>
      { modes }
    </section>
  )
}