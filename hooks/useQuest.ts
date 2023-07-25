import { create } from "zustand"

interface SSGorSSR {
  isSSG1: boolean
  onSSG1: () => void,
  onSSR1: () => void,
  isSSG2: boolean
  onSSG2: () => void,
  onSSR2: () => void,
  isSSG3: boolean
  onSSG3: () => void,
  onSSR3: () => void,
  isSSG4: boolean
  onSSG4: () => void,
  onSSR4: () => void,
  isSSG5: boolean
  onSSG5: () => void,
  onSSR5: () => void,
  isSSG6: boolean
  onSSG6: () => void,
  onSSR6: () => void,
  isAns: boolean,
  onAnsTrue: () => void,
  onAnsFalse: () => void,
}

const useSSGorSSR = create<SSGorSSR>((set) => ({
  isSSG1: true,
  onSSG1: () => set({ isSSG1: true }),
  onSSR1: () => set({ isSSG1: false }),
  isSSG2: true,
  onSSG2: () => set({ isSSG2: true }),
  onSSR2: () => set({ isSSG2: false }),
  isSSG3: true,
  onSSG3: () => set({ isSSG3: true }),
  onSSR3: () => set({ isSSG3: false }),
  isSSG4: true,
  onSSG4: () => set({ isSSG4: true }),
  onSSR4: () => set({ isSSG4: false }),
  isSSG5: true,
  onSSG5: () => set({ isSSG5: true }),
  onSSR5: () => set({ isSSG5: false }),
  isSSG6: true,
  onSSG6: () => set({ isSSG6: true }),
  onSSR6: () => set({ isSSG6: false }),
  isAns: false,
  onAnsTrue: () => set({ isAns: true }),
  onAnsFalse: () => set({ isAns: false }),
}))

export default useSSGorSSR