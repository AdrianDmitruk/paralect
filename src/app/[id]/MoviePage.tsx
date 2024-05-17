'use client'

import {
  Anchor,
  Breadcrumbs,
  Flex,
  Group,
  Paper,
  Text,
  Title,
  rem
} from '@mantine/core'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import YouTube, { YouTubeProps } from 'react-youtube'

import { StarIcon } from '@/components/icons/StarIcon'

import classes from './MoviePage.module.css'

export function MoviePage() {
  const items = [
    { title: 'Movies', href: '/' },
    { title: 'The Green mile', href: '/' }
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ))
  const opts: YouTubeProps['opts'] = {
    height: '290',
    width: '100%'
  }
  return (
    <Flex direction='column' gap={rem(20)} maw={rem(800)} w='100%'>
      <Breadcrumbs>{items}</Breadcrumbs>

      <Paper radius={rem(12)} p={rem(24)} w='100%'>
        <Flex gap='md' justify='space-between' align='flex-start' w='100%'>
          <Flex gap='md' w='100%'>
            <Image
              src='./image-full.jpg'
              alt='image'
              width={250}
              height={352}
            />

            <Flex direction='column' justify='space-between' w='100%'>
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

              <Flex direction='column' gap={rem(12)}>
                <Group gap={rem(8)}>
                  <Text size='md' className={classes.text} w={rem(140)}>
                    Duration
                  </Text>
                  <Text size='md'>3h 09m</Text>
                </Group>
                <Group gap={rem(8)}>
                  <Text size='md' className={classes.text} w={rem(140)}>
                    Premiere
                  </Text>
                  <Text size='md'>December 6, 1999</Text>
                </Group>
                <Group gap={rem(8)}>
                  <Text size='md' className={classes.text} w={rem(140)}>
                    Budget
                  </Text>
                  <Text size='md'>$125,000,000</Text>
                </Group>
                <Group gap={rem(8)}>
                  <Text size='md' className={classes.text} w={rem(140)}>
                    Gross worldwide
                  </Text>
                  <Text size='md'>$760,006,945</Text>
                </Group>
                <Group gap={rem(8)}>
                  <Text size='md' className={classes.text} w={rem(140)}>
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
          </Flex>
          <StarIcon color='#D5D6DC' />
        </Flex>
      </Paper>
      <Paper radius={rem(12)} p={rem(24)} w='100%'>
        <Flex direction='column' gap={rem(20)}>
          <Flex direction='column' gap='md'>
            <Title order={3} size={rem(20)}>
              Trailer
            </Title>
            <div className={classes.youtube}>
              <div className={classes.youtubeWrap}>
                <div className={classes.youtubePlayer}>
                  <YouTube videoId='2g811Eo7K8U' opts={opts} />
                </div>
              </div>
            </div>
          </Flex>
          <div className={classes.border} />
          <Flex direction='column' gap='md'>
            <Title order={3} size={rem(20)}>
              Description
            </Title>
            <Text>
              Dan Browns controversial best-selling novel about a powerful
              secret thats been kept under wraps for thousands of years comes to
              the screen in this suspense thriller from Director Ron Howard.
            </Text>
          </Flex>
          <div className={classes.border} />
          <Flex direction='column' gap='md'>
            <Title order={3} size={rem(20)}>
              Production
            </Title>
            <Flex direction='column' gap={rem(12)}>
              <Group gap={rem(8)}>
                <div className={classes.img}>
                  <img src='./clapperboard.png' alt='clapperboard' />
                </div>
                <Title order={3} size={rem(20)}>
                  Castle Rock Entertainment
                </Title>
              </Group>
              <Group gap={rem(8)}>
                <div className={classes.img}>
                  <img src='./clapperboard.png' alt='clapperboard' />
                </div>
                <Title order={3} size={rem(20)}>
                  Castle Rock Entertainment
                </Title>
              </Group>
              <Group gap={rem(8)}>
                <div className={classes.img}>
                  <img src='./clapperboard.png' alt='clapperboard' />
                </div>
                <Title order={3} size={rem(20)}>
                  Castle Rock Entertainment
                </Title>
              </Group>
            </Flex>
          </Flex>
        </Flex>
      </Paper>
    </Flex>
  )
}
