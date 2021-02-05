import cst from '../constants';

function login(email, password) {
  return {
    type: cst.ACTION_LOGIN,
    payload: {
      email,
      password
    }
  }
}

function logout(email) {
  return {
    type: cst.ACTION_LOGOUT,
    payload: {
      email
    }
  }
}

export const appAction = {
  login,
  logout
};
