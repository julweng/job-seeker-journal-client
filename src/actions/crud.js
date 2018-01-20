export const ADD_SKILL  = 'ADD_SKILL';
export const addSkill = skill => ({
  type: ADD_SKILL,
  skill
})

export const UPDATE_SKILL = 'UPDATE_SKILL';
export const updateSkill = skill => ({
  type: UPDATE_SKILL,
  skill
})

export const DELETE_SKILL = 'DELETE_SKILL';
export const deleteSkill = skill => ({
  type: DELETE_SKILL,
  skill
})
