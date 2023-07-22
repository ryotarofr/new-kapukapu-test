"use client"

import Link from "next/link";

import { PostMetadata } from "@/types/PostMetadata";


const Infomation = (props: PostMetadata) => {
  return (
    // <div
    //   className="border border-slate-300 p-4 rounded-md shadow-sm
    // bg-white hover:bg-slate-100"
    // >
    <div className="rounded-2xl transition ease-in-out duration-200 bg-gray-300 dark:bg-neutral-600 text-black dark:text-white w-full h-full dark:shadow-neutral-800 p-4">
      <div className="flex justify-between">
        <p className="text-sm text-slate-700 dark:text-white">{props.date}</p>
      </div>

      <Link
        href={`/posts/${props.slug}`}
        className="cursor-pointer"
      >
        <h2 className="text-blue-600 dark:text-blue-400 hover:underline mb-4">{props.title}</h2>
      </Link>

      <p className="text-slate-900 dark:text-white">{props.subtitle}</p>
    </div>
  );
}

export default Infomation