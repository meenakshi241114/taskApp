import { put, call, take } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import UserActions from 'App/Stores/User/Actions'
import { userService } from 'App/Services/UserService'
import { ValidationService } from 'App/Services/ValidationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import StartupActions from 'App/Stores/Startup/Actions';

export function* loginUser(data) {

	yield put(UserActions.userLoginLoading());
	try {
		const userData = yield call(userService.loginUser, data)
		if (userData) {
			yield put(UserActions.userLoginSuccess(userData));
			yield put(StartupActions.startup());
		} else {
			yield put(UserActions.userLoginFailure())
		}
	} catch (error) {
		yield put(UserActions.userLoginFailure())
	}
}

export function* watchUserLoginRequest() {
	while (true) {
		const { data } = yield take(UserTypes.LOGIN_USER)

		try {
			const validationFailed = yield call(ValidationService.validateLoginForm, data);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(UserActions.userLoginValidationFailed(validationFailed));
				continue;
			}
		} catch (err) { }
		yield call(loginUser, data)
	}
}
