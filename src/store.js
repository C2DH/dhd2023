import create from 'zustand'

export const MenuClosed = 'closed'
export const MenuOpen = 'open'

export const useMenuStore = create((set) => ({
  menuStatus: MenuClosed,
  currentStepIndex: null,
  setCurrentStepIndex: (currentStepIndex) => set({ currentStepIndex }),
  setMenuStatus: (menuStatus) => set({ menuStatus }),
}))
