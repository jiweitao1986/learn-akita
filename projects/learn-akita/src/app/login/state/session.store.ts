import { Injectable } from '@angular/core';
import { ID, Store, StoreConfig } from '@datorama/akita';
import { User } from './session.model';

export interface SessionState {
  user: User | null;
}

export function createSession(user: User): User {
  return { ...user };
}

export function createInitialState(): SessionState {

  // return {
  //   user: null
  // };

  return {
    user: {
      firstName: 'anonymous',
      lastName: 'anonymous',
      token: 'anonymous'
    }
  };

}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }

  login(data: User) {
    const user = createSession(data);
    this.update({ user });
  }

  logout() {
    this.update(createInitialState());
  }
}
