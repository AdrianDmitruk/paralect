import {
  ColorSchemeScript,
  Container,
  MantineProvider,
  createTheme,
  rem
} from '@mantine/core'
import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Sidebar } from '@/components/sidebar/Sidebar'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const theme = createTheme({
  components: {
    Button: {
      defaultProps: {
        color: 'violet.5',
        radius: rem(8)
      }
    }
  }
})

export const metadata: Metadata = {
  title: 'Paralect',
  description: 'Paralect test project'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme='light'>
          <Container
            size={rem(1456)}
            h='100%'
            pl={0}
            style={{
              display: 'flex'
            }}
          >
            <Sidebar />
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  )
}
