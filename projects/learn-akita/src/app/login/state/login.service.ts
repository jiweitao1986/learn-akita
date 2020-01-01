import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { User } from './session.model';
import { SessionStore } from './session.store';
import { LoginDataService } from './login-data.service';


/**
 * 职责
 * 1、负责基本的逻辑控制（类似于MVC框架的Controller）
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private loginDataService: LoginDataService,
    private sessionStore: SessionStore,
    // private router: Router
  ) { }

  login() {
    return this.loginDataService.getUser().pipe(
      tap((user: User) => {

        // 更新store
        this.sessionStore.login(user);
      }),
      tap((user: User) => {
        console.log(`${user.firstName} Logined`);
        console.log(`Redirect to Dashboard`);
      })
    );
  }
}
