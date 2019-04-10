import { useCallback, useState } from 'react'

export default function useCalculator ()
{
  const [ calculator, setCalculator ] = useState({
    equation: '',
    result: '',
    message: '',
  })

  const calculate = useCallback(
    () =>
    {

    },
    []
  )

  return { calculate, ...calculator }
}