import {User} from './interfaces/User';

class API {
  connect(login: string, password: string): Promise<User> {
    console.log('login: ', login);
    console.log('password: ', password);
    throw new Error('Method not implemented.');
  }
}

export const api = new API();
