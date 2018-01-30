import {SubmissionError} from 'redux-form';
import { API_BASE_URL } from '../config';
import {normalizeResponseErrors} from './utils';

export function skillsHasErrored(bool) {
  return {
    type: 'SKILLS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function skillsIsLoading(bool) {
  return {
    type: 'SKILLS_IS_LOADING',
    isLoading: bool
  }
}

export function skillsFetchDataSuccess(skills) {
  return {
    type: 'SKILLS_FETCH_DATA_SUCCESS',
    skills
  }
}

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
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
/*
export const getUserSkills = user => dispatch => {
    return fetch(`${API_BASE_URL}/users/skills/${userId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
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
*/
