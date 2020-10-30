import loginDetail from '../Data/login.json';

function loginUser(params) {
  if(loginDetail.username === params.userName){
      return loginDetail;
  }else if(loginDetail.password === params.password){
      return loginDetail
  }else{
    alert('Please enter valid username or password')
  }
}

export const userService = {
  loginUser
}
