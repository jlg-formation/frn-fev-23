import {create} from 'zustand';
import {User} from '../interfaces/User';

export interface AuthenticationStore {
  user: User | undefined;
  connect: () => void;
  disconnect: () => void;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  user: undefined,
  connect: () => {
    console.log('connecting...');

    set(() => ({user: {displayName: 'Jean-Louis GUENEGO'}}));
  },
  disconnect: () => {
    console.log('disconnecting...');

    set(() => ({user: undefined}));
  },
}));
