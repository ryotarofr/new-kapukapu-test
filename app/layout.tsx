import './globals.css'
import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getContentsByUserId from '@/actions/getContentsByUserId'
import Player from '@/components/Player'
import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices'
import { ThemeButton, ThemeProvider } from '@/components/Theme'

export const revalidate = 60
export const dynamic = 'force-static'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'kapucode',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userContents = await getContentsByUserId()
  const products = await getActiveProductsWithPrices()

  return (
    <html lang="ja">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <ThemeProvider>
              <ThemeButton />
              {/* <Sidebar contents={userContents} > */}
                {children}
              {/* </Sidebar> */}
            </ThemeProvider>
            <Player />
          </UserProvider>
        </SupabaseProvider>

      </body>
    </html>
  )
}
