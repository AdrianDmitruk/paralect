'use client'

import { Button, Flex, Group, Pagination, Title, rem } from '@mantine/core'
import { useState } from 'react'

import { Card } from '@/components/card/Card'
import { RatingsInput } from '@/components/ui/ratings-input/RatingsInput'
import { SearchInput } from '@/components/ui/search-input/SearchInput'
import { MultiSelectInput } from '@/components/ui/selects/multi-select-input/MultiSelectInput'
import { SelectInput } from '@/components/ui/selects/select-input/SelectInput'
import { SORT } from '@/components/ui/selects/select.data'

export function MainPage() {
  const [searchValue, setSearchValue] = useState<string>('')
  const [genresValue, setGenresValue] = useState<string[] | []>([])
  const [yearValue, setYearValue] = useState<string | null>(null)
  const [ratingsFromValue, setRatingsFromValue] = useState<string | number>('')
  const [ratingsToValue, setRatingsToValue] = useState<string | number>('')
  const [sortValue, setSortValue] = useState<string | null>(null)

  const [resetFilters, setResetFilters] = useState<boolean>(false)

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value)
  }

  const handleGenresMultiSelectChange = (value: string[]) => {
    setGenresValue(value)
  }

  const handleYearSelectChange = (value: string | null) => {
    setYearValue(value)
  }

  const handleRatingsFromInputChange = (value: string | number) => {
    setRatingsFromValue(value)
  }

  const handleRatingsToInputChange = (value: string | number) => {
    setRatingsToValue(value)
  }

  const handleSortSelectChange = (value: string | null) => {
    setSortValue(value)
  }

  const onResetFilters = () => {
    setResetFilters(() => !resetFilters)
  }

  return (
    <Flex direction='column' gap={rem(40)} maw={rem(980)}>
      <Group justify='space-between' align='center'>
        <Title order={1} size={rem(32)}>
          Movies
        </Title>
        <SearchInput onSearchInputChange={handleSearchInputChange} />
      </Group>
      <Flex direction='column' gap={rem(24)}>
        <Flex gap='md' align='flex-end'>
          <MultiSelectInput
            resetValue={resetFilters}
            onMultiSelectChange={handleGenresMultiSelectChange}
            label='Genres'
            placeholder='Select genre'
          />

          <SelectInput
            onSelectChange={handleYearSelectChange}
            resetValue={resetFilters}
            label='Release year'
            placeholder='Select release year'
            data={SORT}
          />
          <Group align='flex-end' gap={rem(8)}>
            <RatingsInput
              label='Ratings'
              placeholder='From'
              resetValue={resetFilters}
              onRatingsInputChange={handleRatingsFromInputChange}
            />
            <RatingsInput
              placeholder='To'
              resetValue={resetFilters}
              onRatingsInputChange={handleRatingsToInputChange}
            />
          </Group>

          <Button
            variant='default'
            size='md'
            onClick={onResetFilters}
            styles={{
              root: {
                fontSize: rem(14),
                fontWeight: 500,
                padding: rem(0),
                background: 'inherit',
                border: 'none',
                color: 'var(--mantine-color-gray-6)'
              }
            }}
          >
            Reset filters
          </Button>
        </Flex>

        <Flex justify='flex-end'>
          <SelectInput
            onSelectChange={handleSortSelectChange}
            resetValue={resetFilters}
            label='Sort by'
            placeholder='Select release year'
            data={SORT}
            defaultValue={SORT[0].label}
          />
        </Flex>

        <Flex gap='md' wrap='wrap' w='100%'>
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>

        <Flex justify='end'>
          <Pagination total={3} />
        </Flex>
      </Flex>
    </Flex>
  )
}
