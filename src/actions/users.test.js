import * as users from './users';

describe('getUserSuccess', () => {
  it('should return the action', () => {
    const user = null;
    const expectedAction = {
      type: 'GET_USER_SUCCESS',
      user
    }
    expect(users.getUserSuccess(user)).toEqual(expectedAction);
  });
});

describe('getUserSuccess', () => {
  it('should return the action', () => {
    const user = null;
    const expectedAction = {
      type: 'GET_USER_SUCCESS',
      user
    }
    expect(users.getUserSuccess(user)).toEqual(expectedAction);
  });
});

describe('getUserError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'GET_USER_ERROR',
      err
    }
    expect(users.getUserError(err)).toEqual(expectedAction);
  })
})

describe('getSkillError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'GET_SKILL_ERROR',
      err
    }
    expect(users.getSkillError(err)).toEqual(expectedAction);
  });
});

describe('getSkillSuccess', () => {
  it('should return the action', () => {
    const skills = [];
    const expectedAction = {
      type: 'GET_SKILL_SUCCESS',
      skills
    }
    expect(users.getSkillSuccess(skills)).toEqual(expectedAction);
  });
});

describe('addSkillSuccess', () => {
  it('should return the action', () => {
    const skills = [];
    const expectedAction = {
      type: 'ADD_SKILL_SUCCESS',
      skills
    }
    expect(users.addSkillSuccess(skills)).toEqual(expectedAction);
  });
});


describe('addSkillError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'ADD_SKILL_ERROR',
      err
    }
    expect(users.addSkillError(err)).toEqual(expectedAction);
  });
});

describe('addSkillError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'ADD_SKILL_ERROR',
      err
    }
    expect(users.addSkillError(err)).toEqual(expectedAction);
  });
});

describe('updateSkillError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'UPDATE_SKILL_ERROR',
      err
    }
    expect(users.updateSkillError(err)).toEqual(expectedAction);
  });
});

describe('updateSkillSuccess', () => {
  it('should return the action', () => {
    const skill = {};
    const expectedAction = {
      type: 'UPDATE_SKILL_SUCCESS',
      skill
    }
    expect(users.updateSkillSuccess(skill)).toEqual(expectedAction);
  });
});

describe('deleteSkillSuccess', () => {
  it('should return the action', () => {
    const skill = null;
    const expectedAction = {
      type: 'DELETE_SKILL_SUCCESS',
      skill
    }
    expect(users.deleteSkillSuccess(skill)).toEqual(expectedAction);
  });
});

describe('deleteSkillError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'DELETE_SKILL_ERROR',
      err
    }
    expect(users.deleteSkillError(err)).toEqual(expectedAction);
  });
});

describe('getJobError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'GET_JOB_ERROR',
      err
    }
    expect(users.getJobError(err)).toEqual(expectedAction);
  });
});

describe('getJobSuccess', () => {
  it('should return the action', () => {
    const jobs = [];
    const expectedAction = {
      type: 'GET_JOB_SUCCESS',
      jobs
    }
    expect(users.getJobSuccess(jobs)).toEqual(expectedAction);
  });
});

describe('addJobSuccess', () => {
  it('should return the action', () => {
    const jobs = [];
    const expectedAction = {
      type: 'ADD_JOB_SUCCESS',
      jobs
    }
    expect(users.addJobSuccess(jobs)).toEqual(expectedAction);
  });
});

describe('addJobError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'ADD_JOB_ERROR',
      err
    }
    expect(users.addJobError(err)).toEqual(expectedAction);
  });
});

describe('updateJobError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'UPDATE_JOB_ERROR',
      err
    }
    expect(users.updateJobError(err)).toEqual(expectedAction);
  });
});

describe('updateJobSuccess', () => {
  it('should return the action', () => {
    const job = {};
    const expectedAction = {
      type: 'UPDATE_JOB_SUCCESS',
      job
    }
    expect(users.updateJobSuccess(job)).toEqual(expectedAction);
  });
});

describe('deleteJobError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'DELETE_JOB_ERROR',
      err
    }
    expect(users.deleteJobError(err)).toEqual(expectedAction);
  });
});

describe('deleteJobSuccess', () => {
  it('should return the action', () => {
    const job = {};
    const expectedAction = {
      type: 'DELETE_JOB_SUCCESS',
      job
    }
    expect(users.deleteJobSuccess(job)).toEqual(expectedAction);
  });
});

describe('getJobFilterByIdSuccess', () => {
  it('should return the action', () => {
    const job = {};
    const expectedAction = {
      type: 'GET_JOB_FILTER_BY_ID_SUCCESS',
      job
    }
    expect(users.getJobFilterByIdSuccess(job)).toEqual(expectedAction);
  });
});

describe('getJobFilterByIdError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'GET_JOB_FILTER_BY_ID_ERROR',
      err
    }
    expect(users.getJobFilterByIdError(err)).toEqual(expectedAction);
  });
});

describe('getJobsFilterByMonthError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'GET_JOBS_FILTER_BY_MONTH_ERROR',
      err
    }
    expect(users.getJobsFilterByMonthError(err)).toEqual(expectedAction);
  });
});

describe('getJobsFilterByMonthSuccess', () => {
  it('should return the action', () => {
    const jobsByMonth = [];
    const expectedAction = {
      type: 'GET_JOBS_FILTER_BY_MONTH_SUCCESS',
      jobsByMonth
    }
    expect(users.getJobsFilterByMonthSuccess(jobsByMonth)).toEqual(expectedAction);
  });
});

describe('getSkillFilterByIdError', () => {
  it('should return the action', () => {
    const err = null;
    const expectedAction = {
      type: 'GET_SKILL_FILTER_BY_ID_ERROR',
      err
    }
    expect(users.getSkillFilterByIdError(err)).toEqual(expectedAction);
  });
});

describe('getSkillFilterByIdSuccess', () => {
  it('should return the action', () => {
    const skill = [];
    const expectedAction = {
      type: 'GET_SKILL_FILTER_BY_ID_SUCCESS',
      skill
    }
    expect(users.getSkillFilterByIdSuccess(skill)).toEqual(expectedAction);
  });
});
