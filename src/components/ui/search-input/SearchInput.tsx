'use client'

import { Button, TextInput, rem } from '@mantine/core'
import { Search } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

export function SearchInput({
  onSearchInputChange
}: {
  onSearchInputChange: (value: string) => void
}) {
  const [value, setValue] = useState<string>('')

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
    onSearchInputChange(value)
  }

  const iconSearch = (
    <Search style={{ width: rem(16), height: rem(16) }} string={rem(1.75)} />
  )

  return (
    <TextInput
      placeholder='Search movie title'
      leftSection={iconSearch}
      rightSection={<Button h={rem(32)}>Search</Button>}
      rightSectionWidth={rem(109)}
      leftSectionWidth={rem(44)}
      value={value}
      onChange={handleSearchInput}
      radius={rem(8)}
      styles={{
        input: {
          height: rem(48),
          width: rem(409)
        }
      }}
    />
  )
}
