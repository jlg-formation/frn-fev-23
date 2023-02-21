import {User} from './interfaces/User';
import {sleep} from './misc';

class API {
  async connect(login: string, password: string): Promise<User> {
    console.log('login: ', login);
    console.log('password: ', password);
    await sleep(2000);
    throw new Error('Method not implemented.');
  }
}

export const api = new API();
