import firebase from 'firebase';

export const AuthActionType = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER'
} as const;

// T[keyof T] で、Tのすべてのプロパティ（key）に対応する値を取り出せる。
type ValueOf<T> = T[keyof T];

export type AuthAction = {
  type: ValueOf<typeof AuthActionType>;
  user?: firebase.User;
};

export const login = (user: firebase.User): AuthAction => ({
  type: AuthActionType.LOGIN,
  user,
});

export const logout = (): AuthAction => ({
  type: AuthActionType.LOGOUT
});

export const register = (user: firebase.User): AuthAction => ({
  type: AuthActionType.REGISTER,
  user
});