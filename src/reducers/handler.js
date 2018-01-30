import {
  TOGGLE_OPEN,
  OPEN_ADD_SKILL_FORM,
  CLOSE_ADD_SKILL_FORM,
  OPEN_EDIT_SKILL_FORM,
  CLOSE_EDIT_SKILL_FORM,
  OPEN_EDIT_JOB_FORM,
  CLOSE_EDIT_JOB_FORM
} from '../actions/handler';

const initialState = {
  isOpen: false,
  addSkill: true,
  editSkill: false,
  editJob: false,
  jobSkillCount: 6
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
      };
    case CLOSE_EDIT_SKILL_FORM:
      return {
        ...state,
        editSkill: false
      };
    case OPEN_EDIT_JOB_FORM:
      return {
        ...state,
        editJob: !state.editJob
      };

    case CLOSE_EDIT_JOB_FORM:
      return {
        ...state,
        editJob: false
      }
    default:
      return state;
  }
}
