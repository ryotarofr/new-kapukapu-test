
import getContentsByUserId from '@/actions/getContentsByUserId';
import Infomation from '@/components/Infomation';
import Sidebar from '@/components/Sidebar';
import getPostMetadata from '@/utils/getPostMetadata';



const Info = async () => {
  const userContents = await getContentsByUserId()

  const postMetadata = getPostMetadata();
  const infoPreviews = postMetadata.map((post) => (
    <Infomation key={post.slug} {...post} />
  ));
  return (
    <div className="
    grid grid-cols-1 gap-2
    md:grid md:grid-cols-12 md:gap-8">
      <div className="col-span-3">
        <Sidebar contents={userContents} />
      </div>
      <div className='col-span-6'>
        <div className="text-sm ml-2 my-6">全てのお知らせ</div>
        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
        >
          {infoPreviews}
        </div>
      </div>
    </div>
  )
}

export default Info