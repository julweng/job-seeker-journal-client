import * as handlers from './handler';

describe('toggleOpen', () => {
  it('should return the action', () => {
    const isOpen = true;
    const expectedAction = {
      type: 'TOGGLE_OPEN',
      isOpen
    }
    expect(handlers.toggleOpen(isOpen)).toEqual(expectedAction);
  })
})

describe('openAddSkillForm', () => {
  it('should return the action', () => {
    const addSkill = false;
    const expectedAction = {
      type: 'OPEN_ADD_SKILL_FORM',
      addSkill
    }
    expect(handlers.openAddSkillForm(addSkill)).toEqual(expectedAction);
  })
})

describe('closeAddSkillForm', () => {
  it('should return the action', () => {
    const addSkill = false;
    const expectedAction = {
      type: 'CLOSE_ADD_SKILL_FORM',
      addSkill
    }
    expect(handlers.closeAddSkillForm(addSkill)).toEqual(expectedAction);
  })
})

describe('openEditSkillForm', () => {
  it('should return the action', () => {
    const editSkill = false;
    const expectedAction = {
      type: 'OPEN_EDIT_SKILL_FORM',
      editSkill
    }
    expect(handlers.openEditSkillForm(editSkill)).toEqual(expectedAction);
  })
})

describe('closeEditSkillForm', () => {
  it('should return the action', () => {
    const editSkill = false;
    const expectedAction = {
      type: 'CLOSE_EDIT_SKILL_FORM',
      editSkill
    }
    expect(handlers.closeEditSkillForm(editSkill)).toEqual(expectedAction);
  })
})

describe('openEditJobForm', () => {
  it('should return the action', () => {
    const editJob = false;
    const expectedAction = {
      type: 'OPEN_EDIT_JOB_FORM',
      editJob
    }
    expect(handlers.openEditJobForm(editJob)).toEqual(expectedAction);
  })
})

describe('closeEditJobForm', () => {
  it('should return the action', () => {
    const editJob = false;
    const expectedAction = {
      type: 'CLOSE_EDIT_JOB_FORM',
      editJob
    }
    expect(handlers.closeEditJobForm(editJob)).toEqual(expectedAction);
  })
})

describe('closeEditJobForm', () => {
  it('should return the action', () => {
    const editJob = false;
    const expectedAction = {
      type: 'CLOSE_EDIT_JOB_FORM',
      editJob
    }
    expect(handlers.closeEditJobForm(editJob)).toEqual(expectedAction);
  })
})

describe('loadJobDataSuccess', () => {
  it('should return the action', () => {
    const jobData = {skill: 'skill', experience: 'experience'};
    const expectedAction = {
      type: 'LOAD_JOB_DATA_SUCCESS',
      jobData
    }
    expect(handlers.loadJobDataSuccess(jobData)).toEqual(expectedAction);
  })
})

describe('toRedirect', () => {
  it('should return the action', () => {
    const redirect = false;
    const expectedAction = {
      type: 'TO_REDIRECT',
      redirect
    }
    expect(handlers.toRedirect(redirect)).toEqual(expectedAction);
  })
})
