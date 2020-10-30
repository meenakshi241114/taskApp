import {  select } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'

export function* startup() {
  
  let user = yield select(state => state.user)
  const {id} = user;
  let logged_in = id;

  if (logged_in) {
  	NavigationService.navigateAndReset('DashboardScreen')
  }
  else {
    NavigationService.navigateAndReset('LoginScreen')
  }
}
