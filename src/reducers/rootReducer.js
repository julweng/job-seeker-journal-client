import { combineReducers } from "redux";
import { handlers } from "./handler";
import markup from './markup';

export default combineReducers({
  handlers: handlers,
  markup: markup
});
