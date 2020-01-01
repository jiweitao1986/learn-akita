import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { filter, map } from 'rxjs/operators';
import { SessionState, SessionStore } from './session.store';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {

  /**
   * 是否登录
   */
  public isLoggedIn$ = this.select(({ user }) => toBoolean(user));

  /**
   * 当前登录的用户
   */
  public loggedInUser$ = this.select().pipe(
    filter(
      ({ user }) => toBoolean(user)
    ),
    map(
      ({ user: { firstName: f, lastName: l } }) => `${f} ${l}`
    )
  );

  constructor(protected store: SessionStore) {
    super(store);
  }

  /**
   * 是否登录
   */
  public isLoggedIn() {
    return toBoolean(this.getValue().user);
  }
}
