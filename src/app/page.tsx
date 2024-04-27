import { Button, Text, rem } from '@mantine/core'
import Image from 'next/image'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Text size='34px' fw={700}>
        Welcome to Paralect
      </Text>

      <Button h={rem(32)} w={rem(88)}>
        Search
      </Button>
    </main>
  )
}
