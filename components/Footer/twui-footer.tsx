import {
  faGithub,
  faInstagram,
  faMastodon,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './blog-logo.svg'
import Logo2 from './logo2.png'
import { AiFillCopyrightCircle } from 'react-icons/ai'

const navigation = {
  affiliates: [
    { name: 'アフィリエイトリンク貼るかもしれません', href: 'add' }
    // { name: 'Blogroll', href: 'https://blogroll.org/' }
  ],
  friends: [
    { name: "other", href: "testfriend" }
    // { name: 'Hugo', href: 'https://hugo.md' },
    // { name: 'Terence', href: 'https://terencehuynh.com/' },
    // { name: 'Nicholas', href: 'https://nicholas.cloud/' },
    // { name: 'Eric', href: 'https://ericjiang.dev/' },
    // { name: 'Daniel', href: 'https://daniel.st/' },
    // { name: 'Matt', href: 'https://mattseymour.substack.com/' },
  ],
  links: [
    { name: 'Me', href: 'https://me.kochie.io' },
    { name: 'Linkedin', href: 'https://linkedin.com/in/rkkochie' },
    {
      name: 'RSS',
      href: `https://${process.env.NEXT_PUBLIC_PROD_URL || process.env.NEXT_PUBLIC_VERCEL_URL
        }/feed/rss.xml`,
    },
  ],
  social: [
    // {
    //   name: 'Twitter',
    //   href: 'https://twitter.com/kochie',
    //   icon: () => <FontAwesomeIcon icon={faTwitter} size="xl" className="" />,
    // },
    {
      name: 'Github',
      href: 'https://github.com/ryotarofr',
      icon: () => <FontAwesomeIcon icon={faGithub} size="xl" className="" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/stories/fr__1030',
      icon: () => <FontAwesomeIcon icon={faInstagram} size="xl" className="" />,
    },
  ],
}

interface FooterProps {
  title: string
  description: string
}

export function Footer({ title, description }: FooterProps) {
  return (
    <footer className="bg-[#f4f8fb] dark:bg-[#222222]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto lg:max-w-5xl pb-8">
        <div className="mt-16 border-t border-black/20 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24" />
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image className="w-[50px] h-[50px] rounded-full" src={Logo2} alt="Company name" />
            <p className="text-sm leading-6 text-gray-800 dark:text-gray-300">{description}</p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-gray-600 dark:text-gray-500 hover:dark:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0 md:col-start-2">
                <h3 className="text-sm font-semibold leading-6 text-gray-600 dark:text-white">
                  Affiliates
                </h3>
                <ul role="list" className="mt-6 space-y-3">
                  {navigation.affiliates.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-800 dark:text-gray-300 hover:text-gray-500 hover:dark:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-600 dark:text-white">
                  Friends（仲間募集中）
                </h3>
                <ul role="list" className="mt-6 space-y-3">
                  {navigation.friends.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-800 dark:text-gray-300 hover:text-gray-500 hover:dark:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-600 dark:text-white">
                  Links
                </h3>
                <ul role="list" className="mt-6 space-y-3">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-800 dark:text-gray-300 hover:text-gray-500 hover:dark:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="text-center mt-16 border-t border-black/20 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="flex justify-center text-xs leading-5 text-gray-600 dark:text-gray-400">
            <span>{title}</span>{' '}
            <AiFillCopyrightCircle size={16} className='' />{' '}
            <span>in 2023</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
