import { handlers } from './handler';
import {
  toggleOpen,
  openAddSkillForm,
  closeAddSkillForm,
  openEditSkillForm,
  closeEditSkillForm,
  openEditJobForm,
  closeEditJobForm,
  loadJobDataSuccess,
  toRedirect,
  toJobCollection,
} from '../actions/handler';


describe('handlers', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = handlers(undefined, {type: '__UNKNOWN'});
    expect(state.isOpen).toEqual(false);
    expect(state.addSkill).toEqual(false);
    expect(state.editSkill).toEqual(false);
    expect(state.editJob).toEqual(false);
    expect(state.jobData).toEqual({});
    expect(state.redirect).toEqual(false);
    expect(state.skillData).toEqual({});
    expect(state.jobCollection).toEqual(false);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = handlers(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});

describe('toggleOpen', () => {
  it('should toggle isOpen to true', () => {
    let state = { isOpen: false };
    state = handlers(state, toggleOpen(state.isOpen));
    expect(state.isOpen).toEqual(true);
  });
});

describe('openAddSkillForm', () => {
  it('should return addSkill as true', () => {
    let state = { addSkill: false };
    state = handlers(state, openAddSkillForm(state.addSkill));
    expect(state.addSkill).toEqual(true);
  });
});

describe('closeAddSkillForm', () => {
  it('should return addSkill as false', () => {
    let state = { addSkill: true };
    state = handlers(state, closeAddSkillForm(state.addSkill));
    expect(state.addSkill).toEqual(false);
  });
});

describe('openEditSkillForm', () => {
  it('should return editSkill as true', () => {
    let state = { editSkill: false };
    state = handlers(state, openEditSkillForm(state.editSkill));
    expect(state.editSkill).toEqual(true);
  });
});

describe('closeEditSkillForm', () => {
  it('should return editSkill as false', () => {
    let state = { editSkill: true };
    state = handlers(state, closeEditSkillForm(state.editSkill));
    expect(state.editSkill).toEqual(false);
  });
});

describe('openEditJobForm', () => {
  it('should return editJob as true', () => {
    let state = { editJob: false };
    state = handlers(state, openEditJobForm(state.editJob));
    expect(state.editJob).toEqual(true);
  });
});

describe('closeEditJobForm', () => {
  it('should return editJob as false', () => {
    let state = { editJob: true };
    state = handlers(state, openEditJobForm(state.editJob));
    expect(state.editJob).toEqual(false);
  });
});

describe('loadJobDataSuccess', () => {
  it('should return jobData', () => {
    let state = { jobData: {} };
    state = handlers(state, loadJobDataSuccess({
      title: 'foo', company: 'bar'
    }));
    expect(state.jobData).toEqual({
        title: 'foo', company: 'bar'
    });
  });
});
