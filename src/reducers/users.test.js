import { users } from './users';
import {
  getUserSuccess,
  getUserError,
  getSkillError,
  getSkillSuccess,
  addSkillSuccess,
  addSkillError,
  updateSkillSuccess,
  updateSkillError,
  deleteSkillSuccess,
  deleteSkillError,
  getSkillFilterByIdSuccess,
  getSkillFilterByIdError,
  getJobError,
  getJobSuccess,
  getJobFilterByIdSuccess,
  getJobFilterByIdError,
  addJobSuccess,
  addJobError,
  updateJobSuccess,
  updateJobError,
  deleteJobSuccess,
  deleteJobError,
  getJobsFilterByMonthSuccess,
  getJobsFilterByMonthError
} from '../actions/users';

describe('users', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = users(undefined, {type: '__UNKNOWN'});
    expect(state.user).toEqual(null);
    expect(state.skills).toEqual([]);
    expect(state.jobs).toEqual([]);
    expect(state.job).toEqual({});
    expect(state.jobsByMonth).toEqual([]);
    expect(state.skill).toEqual({});
    expect(state.err).toEqual(null);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = users(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});

describe('getUserSuccessr', () => {
  it('should get user', () => {
    let state = { user: null };
    state = users(state, getUserSuccess({username: 'foo', password: 'bar'}));
    expect(state.user).toEqual({username: 'foo', password: 'bar'});
  });
});

describe('getUserError', () => {
  it('should get err', () => {
    let state = { err: null };
    state = users(state, getUserError(state.err));
    expect(state.err).toEqual(null);
  });
});

describe('getSkillError', () => {
  it('should get err', () => {
    let state = { err: null };
    state = users(state, getSkillError(state.err));
    expect(state.err).toEqual(null);
  });
});

describe('getSkillSuccess', () => {
  it('should get skill', () => {
    let state = { skills: [] };
    state = users(state, getSkillSuccess([
      { skill: 'a', experience: 5 },
      { skill: 'b', experience: 4 }
  ]));
    expect(state.skills).toEqual([
      { skill: 'a', experience: 5 },
      { skill: 'b', experience: 4 }
  ]);
  });
});

describe('addSkillSuccess', () => {
  it('should add skill', () => {
    let state = { skills: [] };
    state = users(state, addSkillSuccess([
      { skill: 'a', experience: 5 },
      { skill: 'b', experience: 4 }
  ]));
    expect(state.skills).toEqual([
      { skill: 'a', experience: 5 },
      { skill: 'b', experience: 4 }
  ]);
  });
});

describe('addSkillError', () => {
  it('should get err', () => {
    let state = { err: null };
    state = users(state, addSkillError(state.err));
    expect(state.err).toEqual(null);
  });
});

describe('updateSkillSuccess', () => {
  it('should update skill', () => {
    let state = { skills: [{ id: '1', skill: 'a', experience: 5 }] };
    state = users(state, updateSkillSuccess(
      { id: '1', skill: 'b', experience: 4 }
    ));
    expect(state.skills).toEqual([
      { id: '1', skill: 'b', experience: 4 }
    ]);
  });
});
