import getContentsByTitle from "@/actions/getContentsByTitle";
import SearchInput from '@/components/SearchInput';
import SearchContent from './components/SearchContent';
import Sidebar from '@/components/Sidebar'
import getContentsByUserId from '@/actions/getContentsByUserId'


export const revalidate = 60;

interface SearchProps {
  searchParams: { title: string }
};

const Search = async ({ searchParams }: SearchProps) => {
  const contents = await getContentsByTitle(searchParams.title);
  const userContents = await getContentsByUserId()

  return (
    <div
      className="
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
        
    md:grid md:grid-cols-12 md:gap-8
      "
    >
      <div className="col-span-3">
        <Sidebar contents={userContents} />
      </div>
      <div className="col-span-6 my-4">
        <h1 className="text-neutral-800 dark:text-white text-3xl font-semibold">
          {/* 検索 */}
          開発中です。今しばらくお待ちください。🙇‍♂️
        </h1>
        <SearchInput />
        {/* <SearchContent contents={contents} /> */}
      </div>
    </div>
  );
}

export default Search;
