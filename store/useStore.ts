import { create } from 'zustand';
import { Property, User } from '../types';
import { MOCK_PROPERTIES } from '../constants';

interface AppState {
  user: User | null;
  savedPropertyIds: string[];
  properties: Property[];
  searchQuery: string;
  
  // Actions
  login: () => void;
  logout: () => void;
  toggleSaveProperty: (id: string) => void;
  setSearchQuery: (query: string) => void;
  getSavedProperties: () => Property[];
}

export const useStore = create<AppState>((set, get) => ({
  user: null,
  savedPropertyIds: [],
  properties: MOCK_PROPERTIES,
  searchQuery: '',

  login: () => set({
    user: {
      id: 'u1',
      name: 'Nguyễn Văn Khách',
      avatar: 'https://picsum.photos/seed/user/200/200',
      role: 'user',
      email:'nguyenvankhach@example.com',
      savedProperties: []
    }
  }),

  logout: () => set({ user: null }),

  toggleSaveProperty: (id: string) => set((state) => {
    const isSaved = state.savedPropertyIds.includes(id);
    return {
      savedPropertyIds: isSaved 
        ? state.savedPropertyIds.filter(pid => pid !== id)
        : [...state.savedPropertyIds, id]
    };
  }),

  setSearchQuery: (query: string) => set({ searchQuery: query }),

  getSavedProperties: () => {
    const state = get();
    return state.properties.filter(p => state.savedPropertyIds.includes(p.id));
  }
}));