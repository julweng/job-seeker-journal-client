export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const toggleOpen = isOpen => {
  return {
    type: TOGGLE_OPEN,
    isOpen
  }
}

export const OPEN_ADD_SKILL_FORM = 'OPEN_ADD_SKILL_FORM';
export const openAddSkillForm = addSkill => {
  return {
    type: OPEN_ADD_SKILL_FORM,
    addSkill
  }
}

export const CLOSE_ADD_SKILL_FORM = 'CLOSE_ADD_SKILL_FORM';
export const closeAddSkillForm = addSkill => {
  return {
    type: CLOSE_ADD_SKILL_FORM,
    addSkill
  }
}

export const OPEN_EDIT_SKILL_FORM = 'OPEN_EDIT_SKILL_FORM';
export const openEditSkillForm = editSkill => {
  return {
    type: OPEN_EDIT_SKILL_FORM,
    editSkill
  }
}

export const CLOSE_EDIT_SKILL_FORM = 'CLOSE_EDIT_SKILL_FORM';
export const closeEditSkillForm = editSkill => {
  return {
    type: CLOSE_EDIT_SKILL_FORM,
    editSkill
  }
}

export const OPEN_EDIT_JOB_FORM = 'OPEN_EDIT_JOB_FORM';
export const openEditJobForm = editJob => {
  return {
    type: OPEN_EDIT_JOB_FORM,
    editJob
  }
}

export const CLOSE_EDIT_JOB_FORM = 'CLOSE_EDIT_JOB_FORM';
export const closeEditJobForm = editJob => {
  return {
    type: CLOSE_EDIT_JOB_FORM,
    editJob
  }
}

export const ADD_JOB_SKILL_ENTRY = 'ADD_JOB_SKILL_ENTRY';
export const addJobSkillEntry = jobSkillCount => {
  return {
    type: ADD_JOB_SKILL_ENTRY,
    jobSkillCount
  }
}

export const LOAD_SKILL_DATA = 'LOAD_SKILL_DATA';
export const loadSkillData = skillData => {
  return {
    type: LOAD_SKILL_DATA,
    skillData
  }
}

export const LOAD_JOB_DATA = 'LOAD_JOB_DATA';
export const loadJobData = jobData => {
  return {
    type: LOAD_JOB_DATA,
    jobData
  }
}

export const TO_REDIRECT = 'TO_REDIRECT';
export const toRedirect = redirect => {
  return {
    type: TO_REDIRECT,
    redirect
  }
}
