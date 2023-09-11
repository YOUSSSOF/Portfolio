import { create } from "zustand";
import { Portfolio, webPortfolios } from "./data";
import laptop from "./assets/vectors/laptop.svg";

type State = {
  showDrawer: boolean;
  textDirection: string;
  sideBarSelectedINdex: number;
  showPortfolioDrawer: boolean;
  currentPortfolioDrawer: Portfolio;
  currentPortfolioType: string;
};
type Action = {
  setShowDrawer: (val: boolean) => void;
  setTextDirection: (val: string) => void;
  setSelectedIndex: (val: number) => void;
  setShowPortfolioDrawer: (val: boolean) => void;

  setCurrentPortfolioDrawer: (val: Portfolio) => void;
  setCurrentPortfolioType: (val: string) => void;
};

export const useYxStore = create<State & Action>((set) => ({
  showDrawer: false,
  textDirection:
    (localStorage.getItem("lang") == "rtl" ||
    localStorage.getItem("lang") == "ltr"
      ? localStorage.getItem("lang")
      : "rtl") ?? "rtl",
  sideBarSelectedINdex: 1,
  showPortfolioDrawer: false,
  currentPortfolioDrawer: webPortfolios[0],
  currentPortfolioType: laptop,
  setShowDrawer: (val) => set(() => ({ showDrawer: val })),
  setTextDirection: (val) => {
    set(() => ({ textDirection: val }));
    localStorage.setItem("lang", val);
  },
  setShowPortfolioDrawer: (val) => set(() => ({ showPortfolioDrawer: val })),
  setSelectedIndex: (val) => set(() => ({ sideBarSelectedINdex: val })),
  setCurrentPortfolioDrawer: (val) =>
    set(() => ({ currentPortfolioDrawer: val })),
  setCurrentPortfolioType: (val) => set(() => ({ currentPortfolioType: val })),
}));
