import { Button, Flex, Title, rem } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

import { Logo } from '@/components/sidebar/logo/Logo'

export default function NotFound() {
  return (
    <div
      style={{
        position: 'absolute',
        width: 'calc(91rem * var(--mantine-scale))',
        height: '100%',
        background: 'var(--mantine-color-gray-1)'
      }}
    >
      <div style={{ position: 'absolute', left: rem(24), top: rem(24) }}>
        <Logo />
      </div>

      <Flex
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        direction='column'
        align='center'
        gap={rem(48)}
      >
        <Image src='./not-found.png' alt='not-found' width={656} height={196} />
        <Flex direction='column' gap='md' align='center'>
          <Title order={3} style={{ fontWeight: '600', fontSize: rem(20) }}>
            We can’t find the page you are looking for
          </Title>

          <Button
            component={Link}
            href='/'
            h={rem(40)}
            w={rem(103)}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            Go Home
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}
