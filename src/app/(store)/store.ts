/* eslint-disable no-unused-vars */

import { create } from "zustand";

type Store = {
  currentKey: string;
  setCurrentKey: (value: string) => void;
  valuesForm: any;
  setValuesForm: (value: any) => void;
};

const useStore = create<Store>()((set) => ({
  currentKey: "",
  setCurrentKey: (value) => set({ currentKey: value }),
  valuesForm: null,
  setValuesForm: (value) => set({ valuesForm: value }),
}));

export default useStore;
