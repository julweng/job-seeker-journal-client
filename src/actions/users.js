import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

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

export const ADD_SKILL = 'ADD_SKILL';
export const addSkill = skill => ({
  type: ADD_SKILL,
  skill
})

export const ADD_SKILL_ERROR = 'ADD_SKILL_ERROR';
export const addSkillError = err => ({
  type: ADD_SKILL_ERROR,
  err
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

export const UPDATE_PARENT = 'UPDATE_PAARENT';
export const update_parent = bool => ({
  type: UPDATE_PARENT,
  bool
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

// gets skills
export function getSkills(user_id) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/skills/${user_id}`
    return axios.get(url)
      .then(res => {
        if(res.status !== 200) {
          throw Error(res.statusText);
        }
        dispatch(getSkillSuccess(res.data))
        console.log(res.data)
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
    .then(res => dispatch(addSkill(res.data)))
    .catch(err => {
      dispatch(addSkillError(err.message))
    })
  }
}
