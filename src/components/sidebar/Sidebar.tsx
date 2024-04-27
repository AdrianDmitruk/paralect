'use client'

import { Group } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classes from './Sidebar.module.css'
import { Logo } from './logo/Logo'
import { MENU } from './menu.data'

export function Sidebar() {
  const currentPath = usePathname()

  const isActive = (path: string) => {
    return currentPath === path
  }

  const links = MENU.map(item => (
    <Link
      className={classes.link}
      data-active={isActive(item.link) || undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </Link>
  ))
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Logo />
        <Group w='100%'>{links}</Group>
      </div>
    </nav>
  )
}
