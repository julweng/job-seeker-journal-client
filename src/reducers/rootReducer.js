import { combineReducers } from 'redux';
import { handlers } from './handler';
import { auth } from './auth';
import markup from './markup';
import user from './user';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  handlers: handlers,
  markup: markup,
  user: user,
  form: formReducer,
  auth: auth
});
