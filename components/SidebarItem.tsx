import { IconType } from "react-icons"
import { FC } from 'react';
import Link from "next/link";
import { twMerge } from "tailwind-merge";


interface SidebarItemProps {
  icon: IconType,
  label: string,
  active?: boolean,
  href: string,
}


const SidebarItem: FC<SidebarItemProps> = ({
  icon: Icon, label, active, href
}) => {
  return (
    <Link
      href={href}
      className={twMerge(`
        flex
        flex-row
        h-auto
        items-center
        w-full
        gap-x-4
        text-md
        font-medium
        cursor-pointer
        hover:dark:text-white
        hover:text-black
        transition
        text-neutral-600
        dark:text-neutral-400
        py-1
      `,
        active && "dark:text-white text-slate-600"
      )}>
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  )
}

export default SidebarItem