import {
  TOGGLE_OPEN,
  OPEN_ADD_SKILL_FORM,
  CLOSE_ADD_SKILL_FORM,
  OPEN_EDIT_SKILL_FORM,
  CLOSE_EDIT_SKILL_FORM,
  OPEN_EDIT_JOB_FORM,
  CLOSE_EDIT_JOB_FORM,
  LOAD_SKILL_DATA,
  LOAD_JOB_DATA,
  TO_REDIRECT
} from '../actions/handler';

const initialState = {
  isOpen: false,
  addSkill: false,
  editSkill: false,
  editJob: false,
  jobData: {},
  redirect: false,
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
      };

    case LOAD_SKILL_DATA:
      return {
        ...state,
        skillData: action.skillData
      };

    case LOAD_JOB_DATA:
      return {
        jobData: action.jobData
      };

    case TO_REDIRECT:
      return {
        ...state,
        redirect: !state.redirect
      }
    default:
      return state;
  }
}
