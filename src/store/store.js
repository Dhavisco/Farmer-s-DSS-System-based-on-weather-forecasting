import { create } from 'zustand'


export const useStore = create((set) => ({
  userString: "",
  userCity:"",
  lon:0,
  lat:0,
  setUserString: (text) => set({ userString: text }),
  setLon: (text) => set({ lon: text }),
  setLat: (text) => set({ lat: text }),
  setUserCity: (text) => set({ userCity: text }),
}));




