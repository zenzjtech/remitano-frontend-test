import cst from '../constants';
import { getYoutubeVideoDescription } from '../services/app.service'

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

function getMovieInfo(url) {
  return async (dispatch) => {
    let response;
    try {
      dispatch({ type: cst.ACTION_LOADING })
      response = await getYoutubeVideoDescription(url)
      console.log(response)
      return response;
    } catch (error) {
      dispatch({ type: cst.ACTION_FETCHED_FAIL });
      throw error;
    } finally {
      dispatch({ type: cst.ACTION_LOADED, payload: response })
    }
  }
}

export const appAction = {
  login,
  logout,
  switchPage,
  getMovieInfo
};
