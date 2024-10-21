/* eslint-disable no-unused-vars */

import { create } from "zustand";

type Store = {
  currentKey: string;
  currentKeyChild: string;
  setCurrentKey: (value: string) => void;
  setCurrentKeyChild: (value: string) => void;
  valuesForm: any;
  setValuesForm: (value: any) => void;
};

const useStore = create<Store>()((set) => ({
  currentKey: "",
  setCurrentKey: (value) => set({ currentKey: value }),
  currentKeyChild: "",
  setCurrentKeyChild: (value) => set({ currentKeyChild: value }),
  valuesForm: null,
  setValuesForm: (value) => set({ valuesForm: value }),
}));

export default useStore;
