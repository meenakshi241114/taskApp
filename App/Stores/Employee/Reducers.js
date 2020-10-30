
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { EmployeeTypes } from './Actions'

export const employeeListLoading = (state) => ({
  ...state,
  employeeListLoading: true
});

export const employeeListSuccess = (state, { employee }) => ({
  ...state,
  employeeList:employee,
  employeeListLoading: false,
  employeeListErrorMessage: null
});

export const employeeListFailure = (state, { errorMessage }) => ({
  ...state,
  employeeList: {},
  employeeListLoading: false,
  employeeListErrorMessage: errorMessage
});

export const reducer = createReducer(INITIAL_STATE, {
  [EmployeeTypes.EMPLOYEE_LIST_LOADING]                      : employeeListLoading,
  [EmployeeTypes.EMPLOYEE_LIST_SUCCESS]                      : employeeListSuccess,
  [EmployeeTypes.EMPLOYEE_LIST_FAILURE]                      : employeeListFailure,
});

