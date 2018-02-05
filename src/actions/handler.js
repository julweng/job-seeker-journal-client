import moment from 'moment';

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

export const LOAD_JOB_DATA_SUCCESS = 'LOAD_JOB_DATA_SUCCESS';
export const loadJobDataSuccess = jobData => {
  return {
    type: LOAD_JOB_DATA_SUCCESS,
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

export const LOAD_SKILL_DATA_SUCCESS = 'LOAD_SKILL_DATA_SUCCESS';
export const loadSkillDataSuccess = skillData => {
  return {
    type: LOAD_SKILL_DATA_SUCCESS,
    skillData
  }
}

// for loading initial values into redux form
export function getInitialJobValues(data) {
  const { _id, user_id, title, location, company, progress, dateApplied } = data;
  return (dispatch) => {
    dispatch(loadJobDataSuccess({
      id: _id,
      user_id: user_id,
      title: title,
      location: location,
      company: company,
      progress: progress,
      dateApplied: moment(dateApplied).format("YYYY-MM-DD")
    }))
  }
}

// for loading initial values into redux form
export function getInitialSkillValues(data) {
  const { _id, user_id, skill, experience } = data;
  return (dispatch) => {
    dispatch(loadSkillDataSuccess({
      id: _id,
      user_id: user_id,
      skill: skill,
      experience: experience
    }))
  }
}
