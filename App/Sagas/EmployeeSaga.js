import { put, call } from 'redux-saga/effects'
import EmployeeActions from 'App/Stores/Employee/Actions'
import { employeeService } from 'App/Services/EmployeeService'

export function* employeeList(data) {

	yield put(EmployeeActions.employeeListLoading());
	try {
		const employeeData = yield call(employeeService.employeeList, data)
		console.log('empl',employeeData)
		if (employeeData) {
			yield put(EmployeeActions.employeeListSuccess(employeeData.user));
		} else {
			yield put(EmployeeActions.employeeListFailure())
		}
	} catch (error) {
		yield put(EmployeeActions.employeeListFailure())
	}
}

