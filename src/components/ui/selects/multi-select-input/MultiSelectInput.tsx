'use client'

import { MultiSelect, rem } from '@mantine/core'
import { useEffect, useState } from 'react'

import { DownIcon } from '../DownIcon'
import classes from '../Select.module.css'

export function MultiSelectInput({
  onMultiSelectChange,
  resetValue,
  label,
  placeholder
}: {
  onMultiSelectChange: (value: string[]) => void
  resetValue: boolean
  label: string
  placeholder: string
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [value, setValue] = useState<string[] | []>([])

  const handleMultiSelect = (value: string[]) => {
    setValue(value)
    onMultiSelectChange(value)
  }

  useEffect(() => {
    setValue([])
  }, [resetValue])

  const data = Array(100)
    .fill(0)
    .map((_, index) => `Option ${index}`)

  return (
    <MultiSelect
      label={label}
      placeholder={value.length ? '' : `${placeholder}`}
      data={data}
      value={value}
      maxDropdownHeight={224}
      onDropdownOpen={() => setIsOpen(true)}
      onDropdownClose={() => setIsOpen(false)}
      onChange={handleMultiSelect}
      rightSectionWidth={rem(49)}
      radius={rem(8)}
      rightSection={
        <DownIcon
          color={isOpen ? '#9854F6' : '#ACADB9'}
          className={isOpen ? `${classes.iconDown}` : `${classes.iconUp}`}
        />
      }
      withCheckIcon={false}
      size='md'
      styles={{
        input: {
          fontSize: rem(14)
        },
        wrapper: {
          width: rem(283)
        }
      }}
    />
  )
}
