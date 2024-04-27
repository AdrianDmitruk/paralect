import { Text } from '@mantine/core'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import classes from './Logo.module.css'

const poppins = Poppins({
  weight: ['600'],
  style: 'normal',
  subsets: ['latin']
})

export function Logo() {
  return (
    <Link href='/' className={classes.logo} rel='preload' as='/'>
      <Image src='/logo.svg' alt='ArrowFlicks' width={32} height={32} />
      <Text
        component='span'
        className={`${poppins.className} ${classes.logoText}`}
      >
        ArrowFlicks
      </Text>
    </Link>
  )
}
