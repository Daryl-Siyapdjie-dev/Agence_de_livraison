import { create } from 'zustand';

interface PricingStore {
  selectedOptions: { [key: string]: string };
  prices: { [key: string]: number };
  setSelectedOption: (componentId: string, option: string, price: number) => void;
}

const usePricingStore = create<PricingStore>((set) => ({
  selectedOptions: {
    component0: 'option1',
    component1: 'option3',
    component2: 'option5',
  },
  prices: {
    component0: 1000,
    component1: 2500,
    component2: 4000,
  },
  setSelectedOption: (componentId, option, price) =>
    set((state) => ({
      selectedOptions: { ...state.selectedOptions, [componentId]: option },
      prices: { ...state.prices, [componentId]: price },
    })),
}));

export default usePricingStore;
