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

function switchPage(page) {
  return {
    type: cst.ACTION_SWITCH_PAGE,
    payload: page
  }
}

export const appAction = {
  login,
  logout,
  switchPage
};
