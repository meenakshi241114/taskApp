import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	employeeList: ['employee'],
	employeeListLoading: null,
	employeeListSuccess: ['employee'],
	employeeListFailure: ['errorMessage'],

});

export const EmployeeTypes = Types
export default Creators
