import { takeLatest, all ,fork} from 'redux-saga/effects'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { startup } from './StartupSaga'
import { EmployeeTypes } from 'App/Stores/Employee/Actions'
import {
  watchUserLoginRequest
} from './UserSaga';

import { employeeList } from './EmployeeSaga';

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    fork(watchUserLoginRequest),
    takeLatest(EmployeeTypes.EMPLOYEE_LIST, employeeList),
  ])
}
