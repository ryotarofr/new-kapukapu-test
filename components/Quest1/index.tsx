"use client"

import useSSGorSSR from "@/hooks/useQuest";
import QuestButton from "./QuestButton";
import { AnserCorrectSSG, AnserWrongSSG, AnserCorrectSSR, AnserWrongSSR } from "./Anser";

// Ans === SSG
export const Quest1_1 = () => {
  const ssgorssr = useSSGorSSR()

  const handleSSR = () => {
    ssgorssr.onSSR1()
  }

  const handleSSG = () => {
    ssgorssr.onSSG1()
  }


  return (
    <div className="mx-4">
      {ssgorssr.isAns ?
        <>
          {ssgorssr.isSSG1 ?
            <>
              <AnserCorrectSSG />
            </>
            :
            <>
              <AnserWrongSSG />
            </>
          }
        </>
        :
        <>
          <QuestButton
            onClick={handleSSG}
            className={`${ssgorssr.isSSG1 ? "border-2 border-blue-500 bg-slate-50" : "bg-slate-300"}`}
          >
            <div className="mx-4">SSG</div>

          </QuestButton>
          <QuestButton
            onClick={handleSSR}
            className={`${ssgorssr.isSSG1 ? "bg-slate-300" : "border-2 border-blue-500 bg-slate-50"}`}
          >
            <div className="mx-4">SSR</div>
          </QuestButton>
        </>
      }
    </div>
  )
}


// Ans === SSR
export const Quest1_2 = () => {
  const ssgorssr = useSSGorSSR()

  const handleSSR = () => {
    ssgorssr.onSSR2()
  }

  const handleSSG = () => {
    ssgorssr.onSSG2()
  }


  return (
    <div className="mx-4">
      {ssgorssr.isAns ?
        <>
          {ssgorssr.isSSG2 ?
            <>
              <AnserWrongSSR />
            </>
            :
            <>
              <AnserCorrectSSR />
            </>
          }
        </>
        :
        <>
          <QuestButton
            onClick={handleSSG}
            className={`${ssgorssr.isSSG2 ? "border-2 border-blue-500 bg-slate-50" : "bg-slate-300"}`}
          >
            <div className="mx-4">SSG</div>

          </QuestButton>
          <QuestButton
            onClick={handleSSR}
            className={`${ssgorssr.isSSG2 ? "bg-slate-300" : "border-2 border-blue-500 bg-slate-50"}`}
          >
            <div className="mx-4">SSR</div>
          </QuestButton>
        </>
      }
    </div>
  )
}


// Ans === SSG
export const Quest1_3 = () => {
  const ssgorssr = useSSGorSSR()

  const handleSSR = () => {
    ssgorssr.onSSR3()
  }

  const handleSSG = () => {
    ssgorssr.onSSG3()
  }


  return (
    <div className="mx-4">
      {ssgorssr.isAns ?
        <>
          {ssgorssr.isSSG3 ?
            <>
              <AnserCorrectSSG />
            </>
            :
            <>
              <AnserWrongSSG />
            </>
          }
        </>
        :
        <>
          <QuestButton
            onClick={handleSSG}
            className={`${ssgorssr.isSSG3 ? "border-2 border-blue-500 bg-slate-50" : "bg-slate-300"}`}
          >
            <div className="mx-4">SSG</div>

          </QuestButton>
          <QuestButton
            onClick={handleSSR}
            className={`${ssgorssr.isSSG3 ? "bg-slate-300" : "border-2 border-blue-500 bg-slate-50"}`}
          >
            <div className="mx-4">SSR</div>
          </QuestButton>
        </>
      }
    </div>
  )
}


// Ans === SSR
export const Quest1_4 = () => {
  const ssgorssr = useSSGorSSR()

  const handleSSR = () => {
    ssgorssr.onSSR4()
  }

  const handleSSG = () => {
    ssgorssr.onSSG4()
  }


  return (
    <div className="mx-4">
      {ssgorssr.isAns ?
        <>
          {ssgorssr.isSSG4 ?
            <>
              <AnserWrongSSR />
            </>
            :
            <>
              <AnserCorrectSSR />
            </>
          }
        </>
        :
        <>
          <QuestButton
            onClick={handleSSG}
            className={`${ssgorssr.isSSG4 ? "border-2 border-blue-500 bg-slate-50" : "bg-slate-300"}`}
          >
            <div className="mx-4">SSG</div>

          </QuestButton>
          <QuestButton
            onClick={handleSSR}
            className={`${ssgorssr.isSSG4 ? "bg-slate-300" : "border-2 border-blue-500 bg-slate-50"}`}
          >
            <div className="mx-4">SSR</div>
          </QuestButton>
        </>
      }
    </div>
  )
}


// Ans === SSG
export const Quest1_5 = () => {
  const ssgorssr = useSSGorSSR()

  const handleSSR = () => {
    ssgorssr.onSSR5()
  }

  const handleSSG = () => {
    ssgorssr.onSSG5()
  }


  return (
    <div className="mx-4">
      {ssgorssr.isAns ?
        <>
          {ssgorssr.isSSG5 ?
            <>
              <AnserCorrectSSG />
            </>
            :
            <>
              <AnserWrongSSG />
            </>
          }
        </>
        :
        <>
          <QuestButton
            onClick={handleSSG}
            className={`${ssgorssr.isSSG5 ? "border-2 border-blue-500 bg-slate-50" : "bg-slate-300"}`}
          >
            <div className="mx-4">SSG</div>

          </QuestButton>
          <QuestButton
            onClick={handleSSR}
            className={`${ssgorssr.isSSG5 ? "bg-slate-300" : "border-2 border-blue-500 bg-slate-50"}`}
          >
            <div className="mx-4">SSR</div>
          </QuestButton>
        </>
      }
    </div>
  )
}


// Ans === SSR
export const Quest1_6 = () => {
  const ssgorssr = useSSGorSSR()

  const handleSSR = () => {
    ssgorssr.onSSR6()
  }

  const handleSSG = () => {
    ssgorssr.onSSG6()
  }


  return (
    <div className="mx-4">
      {ssgorssr.isAns ?
        <>
          {ssgorssr.isSSG6 ?
            <>
              <AnserWrongSSR />
            </>
            :
            <>
              <AnserCorrectSSR />
            </>
          }
        </>
        :
        <>
          <QuestButton
            onClick={handleSSG}
            className={`${ssgorssr.isSSG6 ? "border-2 border-blue-500 bg-slate-50" : "bg-slate-300"}`}
          >
            <div className="mx-4">SSG</div>

          </QuestButton>
          <QuestButton
            onClick={handleSSR}
            className={`${ssgorssr.isSSG6 ? "bg-slate-300" : "border-2 border-blue-500 bg-slate-50"}`}
          >
            <div className="mx-4">SSR</div>
          </QuestButton>
        </>
      }
    </div>
  )
}

