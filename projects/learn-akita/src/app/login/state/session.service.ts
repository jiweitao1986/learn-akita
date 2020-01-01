import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { User } from './session.model';
import { SessionStore } from './session.store';
import { SessionDataService } from './session-data.service';


/**
 * 职责
 * 1、负责基本的逻辑控制（类似于MVC框架的Controller）
 */
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private sessionDataService: SessionDataService,
    private sessionStore: SessionStore,
    // private router: Router
  ) { }

  public changeUser() {

    // 这里暴露出一个问题来：
    // 1、getUser返回的是一个User类型的对象还是一个any类型的userData对象；
    // 2、在哪一个层次才识别User类型，将原始数据转换为User对象？
    // 3、DataService里要不要认识User接口？
    return this.sessionDataService.getUser().pipe(
      tap((userData: User) => {

        // 更新store
        this.sessionStore.changeUser(userData);
      }),
      tap((user: User) => {
        console.log(`${user.firstName} Logined`);
        console.log(`Redirect to Dashboard`);
      })
    );
  }

  public showUser() {
    this.sessionStore.upateUserVisibility(true);
  }

  public hideUser() {
    this.sessionStore.upateUserVisibility(false);
  }

}

export { };

