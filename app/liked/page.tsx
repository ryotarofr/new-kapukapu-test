import getLikedContents from "@/actions/getLikedContents"
import LikedContent from './components/LikedContent';
import Sidebar from "@/components/Sidebar";
import getContentsByUserId from "@/actions/getContentsByUserId";

export const revalidate = 0

const Liked = async () => {
  const contents = await getLikedContents()
  const userContents = await getContentsByUserId()
  return (
    <div
      className="
        rounded-lg 
        h-full 
        overflow-hidden 
        overflow-y-auto

        md:grid md:grid-cols-12 md:gap-8
      "
    >
      <div className="col-span-3">
        <Sidebar contents={userContents} />
      </div>
      <div className="col-span-6 mt-20">
        <div
          className="
              flex 
              flex-col 
              md:flex-row 
              items-center 
              gap-x-5
            "
        >
          {/* <div className="relative h-32 w-32 lg:h-44 lg:w-44"> */}
          {/* <Image
                className="object-cover"
                fill
                src="/images/liked.png"
                alt="Playlist"
              /> */}
          {/* </div> */}
          <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
            <h1
              className="
              text-slate-800
                  dark:text-white 
                  text-2xl 
                  sm:text-4xl 
                  lg:text-5xl 
                  font-bold
                "
            >
              {/* いいねしたコンテンツ */}
              開発中です。今しばらくお待ちください。🙇‍♂️
            </h1>
          </div>
        </div>
      </div>
      {/* <LikedContent contents={contents} /> */}
    </div>
  )
}

export default Liked