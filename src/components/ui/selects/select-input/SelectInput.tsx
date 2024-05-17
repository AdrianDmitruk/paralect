'use client'

import { ComboboxItem, Select, rem } from '@mantine/core'
import { useEffect, useState } from 'react'

import { DownIcon } from '../DownIcon'
import classes from '../Select.module.css'

export function SelectInput({
  onSelectChange,
  data,
  resetValue,
  defaultValue,
  label,
  placeholder
}: {
  onSelectChange: (value: string | null) => void
  data: ComboboxItem[]
  resetValue: boolean
  defaultValue?: string | null
  label: string
  placeholder: string
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    } else {
      setValue(null)
    }
  }, [defaultValue, resetValue])

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [])

  const handleSelect = (value: string | null) => {
    setValue(value)
    onSelectChange(value)
  }

  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      value={value}
      onChange={handleSelect}
      maxDropdownHeight={224}
      onDropdownOpen={() => setIsOpen(true)}
      onDropdownClose={() => setIsOpen(false)}
      rightSectionWidth={rem(49)}
      radius={rem(8)}
      size='md'
      rightSection={
        <DownIcon
          color={isOpen ? '#9854F6' : '#ACADB9'}
          className={isOpen ? `${classes.iconDown}` : `${classes.iconUp}`}
        />
      }
      withCheckIcon={false}
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
