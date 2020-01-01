import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { tap, filter, map } from 'rxjs/operators';
import { SessionState, SessionStore } from './session.store';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {

  public isUserVisible$ = this.select(({ ui }) => toBoolean(ui.isUserVisible));

  public currentUser$ = this.select().pipe(
    tap((state: any) => {
      console.log(state);
    }),
    filter(({ user }) => {
      return toBoolean(user);
    }),
    map(({ user: { firstName: f, lastName: l } }) => {
      return `${f} ${l}`;
    })
  );

  constructor(protected store: SessionStore) {
    super(store);
  }

  // public isLoggedIn$ = this.select(({ user }) => toBoolean(user));
 
  // /**
  //  * 是否登录
  //  */
  // public isLoggedIn() {
  //   return toBoolean(this.getValue().user);
  // }
}
