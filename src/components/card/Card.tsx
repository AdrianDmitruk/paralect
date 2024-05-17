import { Flex, Group, Paper, Text, Title, rem } from '@mantine/core'
import Image from 'next/image'

import { StarIcon } from '../icons/StarIcon'

import classes from './Card.module.css'

export function Card() {
  return (
    <Paper radius={rem(12)} p={rem(24)} maw={rem(482)} w='100%'>
      <Flex justify='space-between'>
        <Flex gap='md'>
          <Image src='/image.jpg' alt='image' width={119} height={170} />
          <Flex
            direction='column'
            maw={rem(263)}
            w='100%'
            justify='space-between'
          >
            <Flex w='100%' direction='column' gap={rem(8)}>
              <Title
                order={3}
                size={rem(20)}
                style={{ fontWeight: 600 }}
                className={classes.title}
              >
                The Green Mile
              </Title>

              <Text size='md' className={classes.text}>
                1999
              </Text>

              <Flex gap={rem(8)} align='center'>
                <Flex gap={rem(4)} align='center'>
                  <StarIcon color='#FAB005' />
                  <Text size='md' fw={700}>
                    9.3
                  </Text>
                </Flex>

                <Text size='md' className={classes.text}>
                  (2.9M)
                </Text>
              </Flex>
            </Flex>
            <Group gap={rem(8)}>
              <Text size='md' className={classes.text}>
                Genres
              </Text>
              <Group gap={rem(6)}>
                <Text size='md' className={classes.genres}>
                  Drama
                </Text>
                <Text size='md' className={classes.genres}>
                  Crime
                </Text>
                <Text size='md' className={classes.genres}>
                  Fantasy
                </Text>
              </Group>
            </Group>
          </Flex>
        </Flex>
        <StarIcon color='#D5D6DC' />
      </Flex>
    </Paper>
  )
}
