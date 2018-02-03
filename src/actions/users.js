import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import moment from 'moment';

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
export const updateSkillSuccess = skill => ({
  type: UPDATE_SKILL_SUCCESS,
  skill
})

export const UPDATE_SKILL_ERROR = 'UPDATE_SKILL_ERROR';
export const updateSkillError = err => ({
  type: UPDATE_SKILL_ERROR,
  err
})

export const DELETE_SKILL_SUCCESS = 'DELETE_SKILL_SUCCESS';
export const deleteSkillSuccess = skill => ({
  type: DELETE_SKILL_SUCCESS,
  skill
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

export const GET_JOB_FILTER_BY_ID_SUCCESS = 'GET_JOB_FILTER_BY_ID_SUCCESS';
export const getJobFilterByIdSuccess = job => ({
  type: 'GET_JOB_FILTER_BY_ID_SUCCESS',
  job
})

export const GET_JOB_FILTER_BY_ID_ERROR = 'GET_JOB_FILTER_BY_ID_ERROR';
export const getJobFilterByIdError = err => ({
  type: 'GET_JOB_FILTER_BY_ID_ERROR',
  err
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
export const updateJobSuccess = job => ({
  type: UPDATE_JOB_SUCCESS,
  job
})

export const UPDATE_JOB_ERROR = 'UPDATE_JOB_ERROR';
export const updateJobError = err => ({
  type: UPDATE_JOB_ERROR,
  err
})

export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const deleteJobSuccess = job => ({
  type: DELETE_JOB_SUCCESS,
  job
})

export const DELETE_JOB_ERROR = 'DELETE_JOB_ERROR';
export const deleteJobError = err => ({
  type: DELETE_JOB_ERROR,
  err
})

export const GET_JOBS_FILTER_BY_MONTH_SUCCESS = 'GET_JOBS_FILTER_BY_MONTH_SUCCESS';
export const getJobsFilterByMonthSuccess = jobsByMonth => ({
  type: GET_JOBS_FILTER_BY_MONTH_SUCCESS,
  jobsByMonth
})

export const GET_JOBS_FILTER_BY_MONTH_ERROR = 'GET_JOBS_FILTER_BY_MONTH_ERROR';
export const getJobsFilterByMonthError = err => ({
  type: GET_JOBS_FILTER_BY_MONTH_ERROR,
  err
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
      if(res.status !== 201) {
        throw Error(res.statusText);
      }
      dispatch(addSkillSuccess(res.data.skills))
    })
    .catch(err => {
      dispatch(addSkillError(err.message))
    })
  }
}

// put skill
export function putSkill(user_id, skill_id, skill, experience) {
  return (dispatch) => {
    const updateSkill = {
      id: skill_id,
      user_id: user_id,
      skill: skill,
      experience: experience
    }
    const url = `${API_BASE_URL}/users/edit/${user_id}/skills/${skill_id}`;
    return axios.put(url, updateSkill)
    .then(res => {
      if(res.status !== 204) {
        throw Error(res.statusText);
      }
    dispatch(updateSkillSuccess(updateSkill))
    })
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
      if(res.status !== 204) {
        throw Error(res.statusText);
      }
      dispatch(deleteSkillSuccess(skill_id))
    })
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

// get job and filter by id
export function getJobFilterById(user_id, job_id) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/jobs/${user_id}`;
    return axios.get(url)
      .then(res => {
        if(res.status !== 200) {
          throw Error(res.statusText);
        }
        dispatch(getJobFilterByIdSuccess(res.data.filter(job => job._id === job_id)));
      })
      .catch(err => {
        dispatch(getJobFilterByIdSuccess(err.message))
      })
  }
}

// get job and filter by month
export function getJobsFilterByMonth(user_id, month) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/jobs/${user_id}`;
    return axios.get(url)
      .then(res => {
        if(res.status !== 200) {
          throw Error(res.statusText);
        }
        dispatch(getJobsFilterByMonthSuccess(res.data.filter(job => parseInt(moment(job.dateApplied).format("M"), 10) === parseInt(moment().month(month).format("M"), 10))))
      })
      .catch(err => {
        dispatch(getJobsFilterByMonthError(err.message))
    })
  }
}

// post job
export function postJob(user_id, title, company, location, dateApplied, progress) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/new/jobs/${user_id}`;
    return axios.post(url, {
      user_id: user_id,
      title: title,
      company: company,
      location: location,
      dateApplied: dateApplied,
      progress: progress
    })
    .then(res => {
      if(res.status !== 201) {
        throw Error(res.statusText);
      }
      dispatch(addJobSuccess(res.data.jobs))
    })
    .catch(err => {
      dispatch(addJobError(err.message))
    })
  }
}

// put job
export function putJob(user_id, job_id, title, company, location, dateApplied, progress) {
  return (dispatch) => {
    const updateJob = {
      id: job_id,
      user_id: user_id,
      title: title,
      company: company,
      location: location,
      dateApplied: dateApplied,
      progress: progress
    }
    const url = `${API_BASE_URL}/users/edit/${user_id}/jobs/${job_id}`;
    return axios.put(url, updateJob)
    .then(res => {
      if(res.status !== 204) {
        throw Error(res.statusText);
      }
    dispatch(updateJobSuccess(updateJob))
    })
    .catch(err => {
      dispatch(updateJobError(err.message))
    })
  }
}

// delete job
export function deleteJob(user_id, job_id) {
  return (dispatch) => {
    const url = `${API_BASE_URL}/users/delete/${user_id}/jobs/${job_id}`;
    return axios.delete(url)
    .then(res => {
      if(res.status !== 204) {
        throw Error(res.statusText);
      }
      dispatch(deleteSkillSuccess(job_id))
    })
    .catch(err => {
      dispatch(deleteSkillError(err.message))
    })
  }
}
