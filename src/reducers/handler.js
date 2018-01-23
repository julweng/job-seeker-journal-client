import {
  TOGGLE_OPEN,
  OPEN_ADD_SKILL_FORM,
  CLOSE_ADD_SKILL_FORM,
  OPEN_EDIT_SKILL_FORM,
  CLOSE_EDIT_SKILL_FORM
} from '../actions/handler';

const initialState = {
  isOpen: false,
  addSkill: false,
  editSkill: false
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
    case CLOSE_ADD_SKILL_FORM:
      return {
        ...state,
        addSkill: false
      }
    case OPEN_EDIT_SKILL_FORM:
      return {
        ...state,
        editSkill: true
      }
    case CLOSE_EDIT_SKILL_FORM:
      return {
        ...state,
        editSkill: false
      }
    default:
      return state;
  }
}
