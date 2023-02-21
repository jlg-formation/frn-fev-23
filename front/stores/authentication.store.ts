import {create} from 'zustand';
import {User} from '../interfaces/User';
import {sleep} from '../misc';

export interface AuthenticationStore {
  user: User | undefined;
  connect: (login: string, password: string) => Promise<void>;
  disconnect: () => Promise<void>;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  user: undefined,
  connect: async (login, password) => {
    console.log('login: ', login);
    console.log('password: ', password);
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
