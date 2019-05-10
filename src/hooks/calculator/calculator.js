import { useCallback, useState } from 'react'

export default function useCalculator ()
{
  const [ mode, setMode ] = useState( 'base' )

  const [ calculator, setCalculator ] = useState({
    equation: '2 + 4 + 5',
    result: '11',
    message: 'message',
  })

  return { mode, setMode, ...calculator }
}