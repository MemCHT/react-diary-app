import { Reducer } from 'redux';
import { AuthAction, AuthActionType } from 'actions';
import firebase from 'firebase';

export type AuthState = {
  user?: firebase.User;
};

export const initialState: AuthState = {user: undefined};

export const authReducer: Reducer<AuthState, AuthAction> = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch(action.type){
    case AuthActionType.LOGIN:
      return {
        ...state,
        user: action.user
      }
    case AuthActionType.LOGOUT:
      return {
        ...state,
        user: undefined
      };
    case AuthActionType.REGISTER:
      return {
        ...state,
        user: action.user
      }
    default: {
      const _: never = action.type;

      return state;
    }
  }
}