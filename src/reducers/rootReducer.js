import { combineReducers } from "redux";
import { handlers } from "./handler";
import markup from './markup';
import user from './user';

export default combineReducers({
  handlers: handlers,
  markup: markup,
  user: user
});
