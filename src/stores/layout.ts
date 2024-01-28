import { create } from "zustand";

type Actions = {
  toggleMenu: () => void;
};

type Store = {
  state: {
    isMenuOpen: boolean;
  };
  actions: Actions;
};

export const useLayoutStore = create<Store>((set) => ({
  state: {
    isMenuOpen: false,
  },
  actions: {
    toggleMenu: () =>
      set((store) => ({
        state: { isMenuOpen: !store.state.isMenuOpen },
      })),
  },
}));
