import { create } from 'zustand';

interface PortfolioStore {
  clickedPortfolio: string | null;
  setClickedPortfolio: (value: string | null) => void;
  onClickGallery: boolean;
  setOnClickGallery: (value: boolean) => void;
  onClickChatRoom: boolean;
  setOnClickChatRoom: (value: boolean) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  clickedPortfolio: null,
  setClickedPortfolio: (value) => set({ clickedPortfolio: value }),
  onClickGallery: false,
  setOnClickGallery: (value) => set({ onClickGallery: value }),
  onClickChatRoom: false,
  setOnClickChatRoom: (value) => set({ onClickChatRoom: value }),
}));
