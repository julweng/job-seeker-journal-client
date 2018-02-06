import {
  TOGGLE_OPEN,
  OPEN_ADD_SKILL_FORM,
  CLOSE_ADD_SKILL_FORM,
  OPEN_EDIT_SKILL_FORM,
  CLOSE_EDIT_SKILL_FORM,
  OPEN_EDIT_JOB_FORM,
  CLOSE_EDIT_JOB_FORM,
  LOAD_JOB_DATA_SUCCESS,
  TO_REDIRECT,
  TO_JOB_COLLECTION,

} from '../actions/handler';

const initialState = {
  isOpen: false,
  addSkill: false,
  editSkill: false,
  editJob: false,
  jobData: {},
  redirect: false,
  jobCollection: false,
  skillData: {}
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

    case LOAD_JOB_DATA_SUCCESS:
      return {
        ...state,
        jobData: action.jobData
      };

    case TO_REDIRECT:
      return {
        ...state,
        redirect: !state.redirect
      }

    case TO_JOB_COLLECTION:
      return {
        ...state,
        jobCollection: !state.jobCollection
      }

    default:
      return state;
  }
}
