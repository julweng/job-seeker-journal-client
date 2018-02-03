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
  GET_JOB_FILTER_BY_ID_SUCCESS,
  GET_JOB_FILTER_BY_ID_ERROR,
  GET_JOBS_FILTER_BY_MONTH_SUCCESS,
  GET_JOBS_FILTER_BY_MONTH_ERROR
} from '../actions/users';

const initialState = {
  user: null,
  skills: [],
  jobs: [],
  job: {},
  jobsByMonth: [],
  err: null
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
        ...state,
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
        skills: state.skills.map(skill =>
          skill._id === action.skill.id ? action.skill : skill)
       }

    case UPDATE_SKILL_ERROR:
      return {
        ...state,
        err: action.err
      }

    case DELETE_SKILL_SUCCESS:
      return {
        ...state,
        skills: state.skills.filter(skill => skill._id !== action.skill)
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
        jobs: [...state.jobs, action.jobs]
      }

    case ADD_JOB_ERROR:
      return {
        ...state,
        jobs: action.jobs
      }

    case UPDATE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.map(job =>
          job._id === action.job.id ? action.job : job),
        job: state.job._id === action.job.id ? action.job : state.job
      }

    case UPDATE_JOB_ERROR:
      return {
        ...state,
        err: action.err
      }

    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.filter(job => job._id !== action.job),
        job: state.job._id === action.job ? {} : state.job
      }

    case DELETE_JOB_ERROR:
      return {
        ...state,
        err: action.err
      }
    case GET_JOB_FILTER_BY_ID_SUCCESS:
      return {
        ...state,
        job: action.job[0]
      }
    case GET_JOB_FILTER_BY_ID_ERROR:
      return {
        ...state,
        err: action.err
      }
    case GET_JOBS_FILTER_BY_MONTH_SUCCESS:
      return {
        ...state,
        jobsByMonth: action.jobsByMonth
      }
    case GET_JOBS_FILTER_BY_MONTH_ERROR:
      return {
        ...state,
        err: action.err
      }
    default:
      return state;
  }
}
