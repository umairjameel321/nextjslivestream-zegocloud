import { create } from "zustand";

interface IUser {
  fullName: string;
  setFullName: (name: string) => void;
}

const useUser = create<IUser>((set) => ({
  fullName: "",
  setFullName: (name: string) => set({ fullName: name }),
}));

export default useUser;
