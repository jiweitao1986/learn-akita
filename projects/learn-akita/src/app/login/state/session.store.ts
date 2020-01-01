import { Injectable } from '@angular/core';
import { ID, Store, StoreConfig } from '@datorama/akita';
import { SessionUI, User } from './session.model';


export interface SessionState {
  ui: SessionUI;
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
    ui: {
      isUserVisible: false,
    },
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

  public changeUser(userData: User) {

    // 注意：
    // 这里要复制一个User对象，不是直接引用数据
    // 如果不这么做，直接副作用是什么？举例说明

    // 方式1：
    // 1、update接受一个新的state，新的state里的user使用从userData复制出来的user；
    // 2、这样userData的修改，不会对state产生副作用，要修改state必须通过update方法，防止直接改了引用对象里的属性，产生不可以预知的状态不一致问题。
    const user: User = { ...userData };
    this.update({ user });

    // 方式2
    // window['userData'] = userData;
    // this.update({
    //   user: userData
    // });

  }

  public upateUserVisibility(isUserVisible: boolean) {
    this.update({
      ui: {
        isUserVisible
      }
    });
  }

}
