import Link from 'next/link';
import { BiSearch } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"

import useNavModal from '@/hooks/useNavModal';
import Header from '../Header';
import { ThemeButton } from '../Theme';

const HeaderTabAndMob = () => {
  const navModal = useNavModal()
  return (
    <div
      className="w-full pt-8 pb-2">
      <div className="flex justify-between">
        <Link href="/" className="text-3xl font-bold dark:text-white">カプコード</Link>
        <div className="flex justify-center">
          <ThemeButton />
          <Link href="/search" className='text-slate-900 dark:text-slate-300 p-[6px] mr-2'>
            <BiSearch size={24} />
          </Link>

          {/* モーダル作る */}

          <div
            onClick={navModal.onOpen}
            className='text-slate-900 dark:text-slate-300 p-[6px]'>
            <RxHamburgerMenu size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTabAndMob