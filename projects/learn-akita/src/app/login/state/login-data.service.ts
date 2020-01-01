import { Injectable } from '@angular/core';
import { timer, throwError, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { User } from './session.model';


/**
 * 职责
 * 1、负责和数据源交互(类似于MVC框架中的M)
 */
@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor() { }

  /**
   * 获取用户
   */
  getUser(): Observable<User> {
    const random = Math.round((Math.random() * 100));
    const user = {
      firstName: `FirstName${random}`,
      lastName:  `LastName${random}`,
      token:     `Token${random}`,
    };
    return timer(300).pipe(
      mapTo(user)
    );
  }
}
