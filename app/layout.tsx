import './globals.css'
import { Figtree } from 'next/font/google'
import { Lato } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getContentsByUserId from '@/actions/getContentsByUserId'
import Player from '@/components/Player'
import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices'
import { ThemeButton, ThemeProvider } from '@/components/Theme'
import { Footer } from '@/components/Footer/twui-footer'
import { ReactNode } from 'react'

export const revalidate = 60
export const dynamic = 'force-static'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'kapucode',
}

// config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
})

const description =
  'My blog about software engineering, programming, and technology. I write about stuff I see around the internet.'


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
              {/* <ThemeButton /> */}
              {/* <Sidebar contents={userContents} > */}
              <Page>
                {children}
              </Page>
              {/* </Sidebar> */}
            </ThemeProvider>
            <Player />
          </UserProvider>
        </SupabaseProvider>

      </body>
    </html>
  )
}



const Page = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`min-h-screen flex flex-col overflow-hidden ${lato.className}`}
    >
      {/* <Topbar /> */}
      <div className="flex-grow">{children}</div>
      <Footer title="Kochie Engineering" description={description} />
      {/* <Footer
        title={'Kochie Engineering'}
        links={[
          { name: 'me', src: 'https://me.kochie.io', goal: 'SEQGQC1X' },
          {
            name: 'linkedin',
            src: 'https://linkedin.com/in/rkkochie',
            goal: 'RMXXVNIC',
          },
          {
            name: 'rss',
            src: `https://${
              process.env.NEXT_PUBLIC_PROD_URL ||
              process.env.NEXT_PUBLIC_VERCEL_URL
            }/feed/rss.xml`,
            goal: 'PZQY507K',
          },
        ]}
      /> */}
    </div>
  )
}
