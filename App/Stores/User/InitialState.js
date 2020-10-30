/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
    id: '',
    userName: '',
    password: '',

    userLoginIsLoading: false,
    userLoginErrorMessage: false,

    validation: {
        invalid_username: false,
        invalid_password: false,
        error_message: '',
    }
}
