'use client'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdDarkMode } from "react-icons/md"
import { BiSolidSun } from "react-icons/bi"
import { IoMdSettings } from "react-icons/io"

import { THEME, useTheme } from './context'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const ThemeButton = () => {
  const [theme, setTheme] = useTheme()

  const bulbOffDiv = (
    <span
      onClick={() => setTheme(THEME.dark)}
      className="fa-stack fa-2x"
      title="Dark Theme"
      role="button"
      aria-label="Dark Theme"
      tabIndex={0}
    >
      <FontAwesomeIcon
        icon={faCircle}
        className="fa-stack-1x md:fa-stack-2x dark:text-white text-black"
      />
      {/* <FontAwesomeIcon icon={faLightbulbSlash} className="fa-stack-1x" /> */}
      <MdDarkMode className="fa-stack-1x text-white dark:text-black" />
      {/* <div className="fa-stack-1x">faLightbulbSlashらしい</div> */}
    </span>
  )
  const bulbOnDiv = (
    <div
      onClick={(): void => setTheme(THEME.light)}
      className="fa-stack fa-2x"
      title={'Light Theme'}
      role="button"
      aria-label="Light Theme"
      tabIndex={0}
    >
      <FontAwesomeIcon
        icon={faCircle}
        className="fa-stack-1x md:fa-stack-2x dark:text-white text-black"
      />
      {/* <FontAwesomeIcon icon={faLightbulbOn} className="fa-stack-1x" /> */}
      <BiSolidSun className="fa-stack-1x text-white dark:text-black" />
      {/* <div className="fa-stack-1x">faLightbulbOnらしい</div> */}
    </div>
  )
  const systemDiv = (
    <div
      onClick={(): void => setTheme(THEME.system)}
      className="fa-stack fa-2x"
      title={'System Theme'}
      role="button"
      aria-label="System Theme"
      tabIndex={0}
    >
      <FontAwesomeIcon
        icon={faCircle}
        className="fa-stack-1x md:fa-stack-2x dark:text-white opacity-100 text-black"
      />
      {/* <FontAwesomeIcon icon={faCogs} className="fa-stack-1x" /> */}
      <IoMdSettings className="fa-stack-1x text-white dark:text-black" />
      {/* <div className="fa-stack-1x">faCogsらしい</div> */}
    </div>
  )

  const nextTheme = (theme: THEME) => {
    if (theme === THEME.dark) return THEME.light
    if (theme === THEME.light) return THEME.system
    if (theme === THEME.system) return THEME.dark

    throw new Error('Undefined Theme')
  }

  return (
    <div className="">
      <div className=" absolute md:relative top-[76px] md:top-[4px] animate duration-300 group flex-col flex gap-4 items-center text-white dark:text-black">
        <div className="">
          <div
            className="w-full h-full animate duration-300"
            onClick={() => setTheme(nextTheme(theme))}
            role="button"
            aria-label="Change Theme"
            tabIndex={0}
          >
            {theme === THEME.light ? bulbOnDiv : null}
            {theme === THEME.dark ? bulbOffDiv : null}
            {theme === THEME.system ? systemDiv : null}
          </div>
        </div>

        <div className="cursor-pointer transition transform-gpu duration-300 animate scale-0 group-hover:scale-100 ease-in-out delay-200 group-hover:delay-0">
          <div
            onClick={(): void => setTheme(THEME.dark)}
            className="fa-stack duration-300 animate fa-lg"
            title={'Dark Theme'}
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="invisible md:visible fa-stack-2x dark:text-white text-black"
            />
            {/* <FontAwesomeIcon icon={faLightbulbSlash} className="fa-stack-1x" /> */}
            <MdDarkMode className="invisible md:visible fa-stack-1x text-white dark:text-black" />
          </div>
        </div>

        <div className="cursor-pointer transition transform-gpu duration-300 animate scale-0 group-hover:scale-100 ease-in-out delay-100">
          <div
            onClick={(): void => setTheme(THEME.light)}
            className="fa-stack duration-300 animate fa-lg"
            title={'Light Theme'}
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="invisible md:visible fa-stack-2x dark:text-white text-black"
            />
            {/* <FontAwesomeIcon icon={faLightbulbOn} className="fa-stack-1x" /> */}
            <BiSolidSun className="invisible md:visible fa-stack-1x text-white dark:text-black" />
          </div>
        </div>

        <div className="cursor-pointer transition transform-gpu duration-300 animate scale-0 group-hover:scale-100 ease-in-out delay-0 group-hover:delay-200">
          <div
            onClick={(): void => setTheme(THEME.system)}
            className="fa-stack duration-300 animate fa-lg"
            title={'System Theme'}
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="invisible md:visible fa-stack-2x dark:text-white text-black"
            />
            {/* <FontAwesomeIcon icon={faCogs} className="fa-stack-1x" /> */}
            <IoMdSettings className="invisible md:visible fa-stack-1x text-white dark:text-black" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeButton
