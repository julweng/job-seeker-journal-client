import {
  GET_SKILL_ERROR,
  GET_SKILL_SUCCESS,
  ADD_SKILL,
  ADD_SKILL_ERROR,
  UPDATE_SKILL,
  DELETE_SKILL

} from '../actions/users';

const initialState = {
  isLoading: false,
  item: [],
  skills: [],
  err: {}
}

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILL_ERROR:
      return {
        ...state,
        ...action.err
      }

    case GET_SKILL_SUCCESS:
      return {
        ...state.skills,
        ...action.skills
      }


    case ADD_SKILL:
      return  {
        ...state,
        skills: [...state.skills, action.skill]
      }

    case ADD_SKILL_ERROR:
      return {
        ...state,
        ...action.err
      }

    case UPDATE_SKILL:
      return {
        ...state,
        skills: state.skills.map(skill =>
        skill.id === action.skill.id ? action.skill : skill)
       }

    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.skill.id)
      };

    default:
      return state;
  }
}
