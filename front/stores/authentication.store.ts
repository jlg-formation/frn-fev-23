import {create} from 'zustand';
import {api} from '../api';
import {User} from '../interfaces/User';
import {sleep} from '../misc';

export interface AuthenticationStore {
  user: User | undefined;
  isConnecting: boolean;
  connect: (login: string, password: string) => Promise<void>;
  disconnect: () => Promise<void>;
}

export const useAuthenticationStore = create<AuthenticationStore>(set => ({
  user: undefined,
  isConnecting: false,
  connect: async (login, password) => {
    try {
      console.log('login: ', login);
      console.log('password: ', password);
      console.log('connecting...');
      set({isConnecting: true});
      const user = await api.connect(login, password);
      set(() => ({user: user}));
    } catch (err) {
      console.log('err: ', err);
      if (err instanceof Error && err.message === 'Bad Login') {
        throw err;
      }
      throw new Error('Technical Error');
    } finally {
      set({isConnecting: false});
    }
  },
  disconnect: async () => {
    console.log('disconnecting...');
    await sleep(2000);
    set(() => ({user: undefined}));
  },
}));
