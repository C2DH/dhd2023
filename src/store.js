import create from "zustand";

export const MenuClosed = "closed";
export const MenuOpen = "open";

export const useMenuStore = create((set) => ({
  menuStatus: MenuClosed,
  setMenuStatus: (menuStatus) => set((state) => ({ menuStatus })),
}));
