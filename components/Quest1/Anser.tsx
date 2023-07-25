"use client"

import useSSGorSSR from "@/hooks/useQuest"
import QuestButton from "./QuestButton"
import Button from "../Button"

export const AnserCorrectSSG = () => {
  return (
    <>
      <QuestButton
        className="bg-green-500"
      >
        <div className="mx-4">SSG</div>

      </QuestButton>
      <QuestButton
        className="bg-slate-300"
      >
        <div className="mx-4">SSR</div>
      </QuestButton>
    </>
  )
}

export const AnserWrongSSG = () => {
  return (
    <>
      <QuestButton
        className="bg-slate-300"
      >
        <div className="mx-4">SSG</div>

      </QuestButton>
      <QuestButton
        className="bg-red-500"
      >
        <div className="mx-4">SSR</div>
      </QuestButton>
    </>
  )
}

export const AnserCorrectSSR = () => {
  return (
    <>
      <QuestButton
        className="bg-slate-300"
      >
        <div className="mx-4">SSG</div>

      </QuestButton>
      <QuestButton
        className="bg-green-500"
      >
        <div className="mx-4">SSR</div>
      </QuestButton>
    </>
  )
}

export const AnserWrongSSR = () => {
  return (
    <>
      <QuestButton
        className="bg-red-500"
      >
        <div className="mx-4">SSG</div>
      </QuestButton>
      <QuestButton
        className="bg-slate-300"
      >
        <div className="mx-4">SSR</div>
      </QuestButton>
    </>
  )
}


export const AnserButton = () => {
  const ssgorssr = useSSGorSSR()

  const hadleAns = () => {
    ssgorssr.onAnsTrue()
  }
  return (
    <Button onClick={hadleAns}>
      <div>解答</div>
      <div>*正解：緑、 不正解：赤*</div>
    </Button>
  )
}