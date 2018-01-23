export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const toggleOpen = isOpen => {
  console.log('you clicked on toggle')
  return {
    type: TOGGLE_OPEN,
    isOpen
  }
}

export const OPEN_ADD_SKILL_FORM = 'OPEN_ADD_SKILL_FORM';
export const openAddSkillForm = addSkill => {
  console.log('you clicked on open addSkill')
  return {
    type: OPEN_ADD_SKILL_FORM,
    addSkill
  }
}

export const CLOSE_ADD_SKILL_FORM = 'CLOSE_ADD_SKILL_FORM';
export const closeAddSkillForm = addSkill => {
  console.log('you clicked on close addSkill')
  return {
    type: CLOSE_ADD_SKILL_FORM,
    addSkill
  }
}

export const OPEN_EDIT_SKILL_FORM = 'OPEN_EDIT_SKILL_FORM';
export const openEditSkillForm = editSkill => {
  console.log('you clicked on open edit Skill')
  return {
    type: OPEN_EDIT_SKILL_FORM,
    editSkill
  }
}

export const CLOSE_EDIT_SKILL_FORM = 'CLOSE_EDIT_SKILL_FORM';
export const closeEditSkillForm = editSkill => {
  console.log('you clicked on close edit Skill')
  return {
    type: CLOSE_EDIT_SKILL_FORM,
    editSkill
  }
}

export const OPEN_EDIT_JOB_FORM = 'OPEN_EDIT_JOB_FORM';
export const openEditJobForm = editJob => {
  console.log('you clicked on close edit Skill')
  return {
    type: OPEN_EDIT_JOB_FORM,
    editJob
  }
}
