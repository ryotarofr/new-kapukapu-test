import Link from 'next/link';
import { RiTerminalLine } from "react-icons/ri"

import getContents from '@/actions/getContents';
import getPostMetadata from '@/utils/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import Infomation from '@/components/Infomation';
import { getAllArticlesMetadata } from '@/libs/article-path';
import Gallery from '@/components/Gallery';
import Sidebar from '@/components/Sidebar'
import getContentsByUserId from '@/actions/getContentsByUserId'
import Header from '@/components/Header';

// export const revalidate = 0;
export const dynamic = 'force-static'

export const metadata = {
  openGraph: {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_PROD_URL ||
          process.env.NEXT_PUBLIC_VERCEL_URL ||
          process.env.VERCEL_URL
          }/_next/image?url=/images/umberto-jXd2FSvcRr8-unsplash.jpg&w=640&q=75`,
        alt: 'Blog website',
      },
    ],
    url: `https://${process.env.NEXT_PUBLIC_PROD_URL ||
      process.env.NEXT_PUBLIC_VERCEL_URL ||
      process.env.VERCEL_URL
      }`,
  },
}

export default async function Home() {
  const articles = await getAllArticlesMetadata()
  const contents = await getContents()

  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  const infoPreviews = postMetadata.slice(0, 3).map((post) => (
    <Infomation key={post.slug} {...post} />
  ));


  const userContents = await getContentsByUserId()

  return (
    <div
      className="
    grid grid-cols-1 gap-2
    md:grid md:grid-cols-12 md:gap-8
    ">
      <div className="col-span-3">
        <Sidebar contents={userContents} />
      </div>
      <div className="rounded-lg h-full w-full overflow-hidden overflow-y-auto col-span-6">
        <div className="mt-8 mb-7">
          <div className="flex pl-10 items-center">
            <h1 className="text-white text-lg font-semibold">
              最近のお知らせ
            </h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">{infoPreviews}</div>
          <Link
            href="/info"
            className="flex items-center mt-2 ml-2 text-sm text-blue-400 hover:text-blue-700"
          >
            <div className="mr-2">すべて表示</div>
            <RiTerminalLine size={24} />
          </Link>
          {/* <PageContent contents={contents} /> */}
          <div className="text-center pt-10">
            {/* <h1 className="text-white text-2xl font-semibold pb-4">
            コンテンツ
          </h1> */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">{postPreviews}</div>
          </div>
        </div>
        <Gallery articles={articles} />
      </div>
      <div className="col-span-3">
        <Header>
          {/* あとでHeaderのchildrenなしに変更 */}
        </Header>
      </div>
    </div>
  )
}


