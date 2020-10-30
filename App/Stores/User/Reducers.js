
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

export const userLoginLoading = (state) => ({
  ...state,
  userLoginIsLoading: true
});

export const userLoginSuccess = (state, { user }) => ({
  ...state,
  userName: null,
  password: null,
  id: user.id,
  userLoginIsLoading: false,
  userLoginErrorMessage: null
});

export const userLoginFailure = (state, { errorMessage }) => ({
  ...state,
  userName: null,
  id: null,
  userLoginIsLoading: false,
  userLoginErrorMessage: errorMessage
});

export const changeLoginForm = (state, {user}) => ({
  ...state,
  userName: user.userName,
  password: user.password,
  userLoginIsLoading: false,
  validation: {...INITIAL_STATE.validation}
});

export const userLoginValidationFailed = (state, {validation}) => ({
  ...state,
  validation: {...state.validation, ...validation}
});

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.USER_LOGIN_LOADING]                      : userLoginLoading,
  [UserTypes.USER_LOGIN_SUCCESS]                      : userLoginSuccess,
  [UserTypes.USER_LOGIN_FAILURE]                      : userLoginFailure,
  [UserTypes.CHANGE_LOGIN_FORM]                       : changeLoginForm,
  [UserTypes.USER_LOGIN_VALIDATION_FAILED]            : userLoginValidationFailed
});

