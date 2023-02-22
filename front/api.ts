import {User} from './interfaces/User';
import {domainUrl} from './app.json';
import {Article, NewArticle} from './interfaces/Article';
class API {
  async addArticle(newArticle: NewArticle) {
    console.log('newArticle: ', newArticle);
    throw new Error('Method not implemented.');
  }

  async checkIfConnected() {
    try {
      const response = await fetch(domainUrl + '/api/auth/isConnected');
      console.log('response: ', response);
      if (response.status !== 200) {
        return undefined;
      }
      const user: User = await response.json();
      return user;
    } catch (err) {
      console.log('err: ', err);
      return undefined;
    }
  }

  async connect(login: string, password: string): Promise<User> {
    try {
      console.log('login: ', login);
      console.log('password: ', password);
      const response = await fetch(domainUrl + '/api/auth/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: login, password: password}),
      });
      if (response.status === 401) {
        throw new Error('Bad Login');
      }
      if (response.status !== 200) {
        throw new Error('Technical Error');
      }
      const user: User = await response.json();
      return user;
    } catch (err) {
      console.log('err: ', err);
      if (err instanceof Error && err.message === 'Bad Login') {
        throw err;
      }
      throw new Error('Technical Error');
    }
  }

  async disconnect() {
    try {
      const response = await fetch(domainUrl + '/api/auth/disconnect', {
        method: 'POST',
      });
      if (response.status !== 200) {
        throw new Error('Technical Error');
      }
    } catch (err) {
      console.log('err: ', err);
      throw new Error('Technical Error');
    }
  }

  async getArticles(): Promise<Article[]> {
    throw new Error('Method not implemented.');
  }
}

export const api = new API();
