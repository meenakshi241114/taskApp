
function validateLoginForm(params) {
	if (!validateFieldIsEmpty(params.userName)) {
		return {
			invalid: true,
			invalid_field: 'username',
			error_message: 'Username can not be empty.'
		}
	}

	if (!validateFieldIsEmpty(params.password)) {
		return {
			invalid_password: true,
			error_message: 'Password can not be empty'
		}
	}

	return false;
}

function validateFieldIsEmpty(value) {
	return !!value;
}

export const ValidationService = {
	validateLoginForm
}
