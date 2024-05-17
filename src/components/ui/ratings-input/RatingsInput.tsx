'use client'

import { NumberInput, rem } from '@mantine/core'
import { useEffect, useState } from 'react'

export function RatingsInput({
  onRatingsInputChange,
  resetValue,
  label,
  placeholder
}: {
  onRatingsInputChange: (value: string | number) => void
  resetValue: boolean
  label?: string
  placeholder: string
}) {
  const [value, setValue] = useState<string | number>('')

  useEffect(() => {
    setValue('')
  }, [resetValue])

  const handleRatingsInput = (value: string | number) => {
    setValue(value)
    onRatingsInputChange(value)
  }

  return (
    <NumberInput
      label={label}
      placeholder={placeholder}
      size='md'
      value={value}
      onChange={handleRatingsInput}
      radius={rem(8)}
      styles={{
        input: {
          fontSize: rem(14)
        },
        wrapper: {
          width: rem(138)
        }
      }}
    />
  )
}
