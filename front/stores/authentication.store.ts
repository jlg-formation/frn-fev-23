import {create} from 'zustand';
import {User} from '../interfaces/User';
import {sleep} from '../misc';

export interface AuthenticationStore {
  user: User | undefined;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  user: undefined,
  connect: async () => {
    console.log('connecting...');
    await sleep(2000);
    set(() => ({user: {displayName: 'Jean-Louis GUENEGO'}}));
  },
  disconnect: async () => {
    console.log('disconnecting...');
    await sleep(2000);
    set(() => ({user: undefined}));
  },
}));
