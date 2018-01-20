import { ADD_SKILL, UPDATE_SKILL, DELETE_SKILL } from '../actions/skill';

const initialState = {
  skills: [{
      id: '1'
      name: 'skill 1'
      exp: '1'
    },
    {
      id: '2'
      name: 'skill 2'
      exp: '2'
    }]
};

/*implement: (updateArray(skills, {skill: 'pipo', exp: 4}, 'skill', 'juan');
const skillUpdated = updateArray(state.skills, action.skill, 'skill', action.skill.id)
function updateArrayskill(array, skillToUpdate, attribute, value) {
  const index = array.findIndex(x => x[attribute] === value);
  // if can't find skill
  if(index < 0) {
    return array;
  }
  return [...array.slice(0, index), objectToUpdate, ...array.slice(index+1)];
}

function deleteArrayskill(array, attribute, value) {
  const index = array.findIndex(x => x[attribute] === value);
  //if can't find skill
  if(index < 0) {
    return array;
  }
  return [...array.slice(0, index), ...array.slice(index+ 1)];
}
*/

export const crudReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_SKILL:
      return  {
        ...state,
        skills: [...state.skills, action.skill]
    }
    case UPDATE_SKILL:
      return {
          ...state,
         skills: state.skills.map(skill =>
            skill.id === action.skill.id ? action.skill : skill);
     }
    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.skill.id);
      };

    default:
      return state;
    }
}
