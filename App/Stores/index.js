import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from 'App/Sagas';
import { reducer as UserReducer } from './User/Reducers';
import { reducer as EmployeeReducer } from './Employee/Reducers';

export default () => {
  const rootReducer = combineReducers({
    user: UserReducer,
    employee: EmployeeReducer
  })

  return configureStore(rootReducer, rootSaga)
}
