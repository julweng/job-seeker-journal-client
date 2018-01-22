import { TOGGLE_OPEN, OPEN_ADD_SKILL_FORM } from '../actions/handler';

const initialState = {
  isOpen: false,
  addSkill: false
}

export const handlers = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen
      }

    case OPEN_ADD_SKILL_FORM:
      return {
        ...state,
        addSkill: true
      }
    default:
      return state;
  }
}
