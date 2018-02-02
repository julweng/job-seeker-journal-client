import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const getUserSuccess = user => ({
  type: 'GET_USER_SUCCESS',
  user
})

export const GET_USER_ERROR = 'GET_USER_ERROR'
export const getUserError = err => ({
  type: 'GET_USER_ERROR',
  err
})

export const GET_SKILL_ERROR = 'GET_SKILL_ERROR';
export const getSkillError = err => ({
  type: 'GET_SKILL_ERROR',
  err
})

export const GET_SKILL_SUCCESS = 'GET_SKILL_SUCCESS';
export const getSkillSuccess = skills => ({
  type: 'GET_SKILL_SUCCESS',
  skills
})

export const ADD_SKILL_SUCCESS = 'ADD_SKILL_SUCCESS';
export const addSkillSuccess = skills => ({
  type: ADD_SKILL_SUCCESS,
  skills
})

export const ADD_SKILL_ERROR = 'ADD_SKILL_ERROR';
export const addSkillError = err => ({
  type: ADD_SKILL_ERROR,
  err
})

export const UPDATE_SKILL_SUCCESS = 'UPDATE_SKILL_SUCCESS';
export const updateSkillSuccess = skills => ({
  type: UPDATE_SKILL_SUCCESS,
  skills
})

export const UPDATE_SKILL_ERROR = 'UPDATE_SKILL_ERROR';
export const updateSkillError = err => ({
  type: UPDATE_SKILL_ERROR,
  err
})

export const DELETE_SKILL_SUCCESS = 'DELETE_SKILL_SUCCESS';
export const deleteSkillSuccess = skills => ({
  type: DELETE_SKILL_SUCCESS,
  skills
})

export const DELETE_SKILL_ERROR = 'DELETE_SKILL_ERROR';
export const deleteSkillError = err => ({
  type: DELETE_SKILL_ERROR,
  err
})

export const GET_JOB_ERROR = 'GET_JOB_ERROR';
export const getJobError = err => ({
  type: 'GET_JOB_ERROR',
  err
})

export const GET_JOB_SUCCESS = 'GET_JOB_SUCCESS';
export const getJobSuccess = jobs => ({
  type: 'GET_JOB_SUCCESS',
  jobs
})

export const ADD_JOB_SUCCESS = 'ADD_JOB_SUCCESS';
export const addJobSuccess = jobs => ({
  type: ADD_JOB_SUCCESS,
  jobs
})

export const ADD_JOB_ERROR = 'ADD_JOB_ERROR';
export const addJobError = err => ({
  type: ADD_JOB_ERROR,
  err
})

export const UPDATE_JOB_SUCCESS = 'UPDATE_JOB_SUCCESS';
export const updateJobSuccess = jobs => ({
  type: UPDATE_JOB_SUCCESS,
  jobs
})

export const UPDATE_JOB_ERROR = 'UPDATE_JOB_ERROR';
export const updateJobError = err => ({
  type: UPDATE_JOB_ERROR,
  err
})

export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const deleteJobSuccess = jobs => ({
  type: DELETE_JOB_SUCCESS,
  jobs
})

export const DELETE_JOB_ERROR = 'DELETE_JOB_ERROR';
export const deleteJobError = err => ({
  type: DELETE_JOB_ERROR,
  err
})

export const LOAD_DATA = 'LOAD_DATA';
export const loadData = data => ({
  type: LOAD_DATA,
  data
})

export const LOAD_MONTH = 'LOAD_MONTH';
export const loadMonth = month => ({
  type: LOAD_MONTH,
  month
})

const headers = { 'content-type': 'application/json' }

// register users
export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

// get user
export function getUser(username) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/user?username=${username}`;
    return axios.get(url)
    .then(res => {
      if(res.status !== 200) {
        throw Error(res.statusText);
      }
      const data = res.data
      const user_id = data[0]._id
      localStorage.setItem('user_id', user_id)
      dispatch(getUserSuccess(res.data))
    })
    .catch(err => {
      dispatch(getUserError(err.message))
    })
  }
}


// get skills
export function getSkills(user_id) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/skills/${user_id}`;
    return axios.get(url)
      .then(res => {
        if(res.status !== 200) {
          throw Error(res.statusText);
        }
        dispatch(getSkillSuccess(res.data))
      })
    .catch(err => {
      dispatch(getSkillError(err.message))
    })
  }
}

// post skills
export function postSkill(user_id, skill, experience) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/new/skills/${user_id}`;
    return axios.post(url, {
      user_id: user_id,
      skill: skill,
      experience: experience
    })
    .then(res => {
      console.log(res);
      if(res.status !== 201) {
        throw Error(res.statusText);
      }
    })
    .then(res => dispatch(addSkillSuccess(res.data)))
    .catch(err => {
      dispatch(addSkillError(err.message))
    })
  }
}

// put skill
export function putSkill(user_id, skill_id, skill, experience) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/edit/${user_id}/skills/${skill_id}`;
    return axios.put(url, {
      user_id: user_id,
      skill: skill,
      experience: experience
    })
    .then(res => {
      console.log(res);
      if(res.status !== 204) {
        throw Error(res.statusText);
      }
    })
    .then(res => dispatch(updateSkillSuccess(res.data)))
    .catch(err => {
      dispatch(updateSkillError(err.message))
    })
  }
}

// delete skill
export function deleteSkill(user_id, skill_id) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/delete/${user_id}/skills/${skill_id}`;
    return axios.delete(url)
    .then(res => {
      console.log(res);
      if(res.status !== 204) {
        throw Error(res.statusText);
      }
    })
    .then(res => dispatch(deleteSkillSuccess(res.data)))
    .catch(err => {
      dispatch(deleteSkillError(err.message))
    })
  }
}

// get job
export function getJobs(user_id) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/jobs/${user_id}`;
    return axios.get(url)
      .then(res => {
        if(res.status !== 200) {
          throw Error(res.statusText);
        }
        dispatch(getJobSuccess(res.data))
      })
    .catch(err => {
      dispatch(getJobError(err.message))
    })
  }
}

// post job
export function postJob(user_id, title, company, location, link, date, progress) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/new/jobs/${user_id}`;
    return axios.post(url, {
      user_id: user_id,
      title: title,
      company: company,
      location: location,
      dateApplied: date,
      progress: progress
    })
    .then(res => {
      console.log(res);
      if(res.status !== 201) {
        throw Error(res.statusText);
      }
    })
    .then(res => dispatch(addSkillSuccess(res.data)))
    .catch(err => {
      dispatch(addSkillError(err.message))
    })
  }
}
