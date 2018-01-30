import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    AUTH_GET_USER_ID_ON_SUCCESS
} from '../actions/auth';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    loading: false,
    error: null,
    //userId: null
};

export const auth = (state = initialState, action) => {
    switch(action.type) {
      case SET_AUTH_TOKEN:
        return {
          ...state,
          authToken: action.authToken
      }
      case CLEAR_AUTH:
        return {
          ...state,
          authToken: null,
          currentUser: null
        }
      case AUTH_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        }
      case AUTH_SUCCESS:
        return {
          ...state,
          loading: false,
          currentUser: action.currentUser
        }
      case AUTH_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error
        }
      case AUTH_GET_USER_ID_ON_SUCCESS:
        return {
          ...state,
          userId: action.userId
        }
      default:
        return state;
    }
}
