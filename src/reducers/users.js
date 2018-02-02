import {
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_SKILL_ERROR,
  GET_SKILL_SUCCESS,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_ERROR,
  UPDATE_SKILL_SUCCESS,
  UPDATE_SKILL_ERROR,
  DELETE_SKILL_SUCCESS,
  DELETE_SKILL_ERROR,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
  ADD_JOB_SUCCESS,
  ADD_JOB_ERROR,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_ERROR,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_ERROR,
  LOAD_DATA,
  LOAD_MONTH,
  RENDER_SKILL
} from '../actions/users';

const initialState = {
  user: null,
  skills: [],
  jobs: [],
  err: null,
  data: {},
  month: '',
  skill: {}
}

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      }

    case GET_USER_ERROR:
      return {
        ...state,
        err: action.err
      }
    case GET_SKILL_ERROR:
      return {
        ...state,
        err: action.err
      }

    case GET_SKILL_SUCCESS:
      return {
        ...state.skills,
        skills: action.skills
      }


    case ADD_SKILL_SUCCESS:
      return  {
        ...state,
        skills: action.skills
      }

    case ADD_SKILL_ERROR:
      return {
        ...state,
        err: action.err
      }

    case UPDATE_SKILL_SUCCESS:
      return {
        ...state,
        skills: action.skills
       }

    case UPDATE_SKILL_ERROR:
      return {
        ...state,
        err: action.err
      }

    case DELETE_SKILL_SUCCESS:
      return {
        ...state,
        skills: action.skills
      };

    case DELETE_SKILL_ERROR:
      return {
        ...state,
        err: action.err
      };

    case GET_JOB_ERROR:
      return {
        ...state,
        err: action.err
      }

    case GET_JOB_SUCCESS:
      return {
        ...state,
        jobs: action.jobs
      }

    case ADD_JOB_SUCCESS:
      return {
        ...state,
        jobs: action.jobs
      }

    case ADD_JOB_ERROR:
      return {
        ...state,
        jobs: action.jobs
      }

    case UPDATE_JOB_SUCCESS:
      return {
        ...state,
        jobs: action.jobs
      }

    case UPDATE_JOB_ERROR:
      return {
        ...state,
        err: action.err
      }

    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        jobs: action.jobs
      }

    case DELETE_JOB_ERROR:
      return {
        ...state,
        err: action.err
      }
    case LOAD_DATA:
      return {
        data: action.data
      }
    case LOAD_MONTH:
      return {
        month: action.month
      }
    default:
      return state;
  }
}
