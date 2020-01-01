interface SessionUI {
  isUserVisible: boolean;
}


interface User {
  firstName: string;
  lastName: string;
  token: string;
}

export { SessionUI, User };
