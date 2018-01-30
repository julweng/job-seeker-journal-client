import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const ITEM_HAS_ERRORED = 'ITEM_HAS_ERRORED';
export function itemHasErrored(bool) {
  return {
    type: 'ITEM_HAS_ERRORED',
    hasErrored: bool
  };
}

export const ITEM_IS_LOADING = 'ITEM_IS_LOADING';
export function itemIsLoading(bool) {
  return {
    type: 'ITEM_IS_LOADING',
    isLoading: bool
  }
}

export const ITEM_FETCH_DATA_SUCCESS = 'ITEM_FETCH_DATA_SUCCESS';
export function itemFetchDataSuccess(items) {
  return {
    type: 'ITEM_FETCH_DATA_SUCCESS',
    items
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

// for gets
export function itemFetchData(url) {
  return (dispatch) => {
    dispatch(itemIsLoading(true));
      axios.get(url)
        .then((response) => {
          if (response.status !== 200) {
            throw Error(response.statusText);
          }
          dispatch(itemIsLoading(false));
            return response;
          })
          .then((response) => dispatch(itemFetchDataSuccess(response.data)))
          .catch(() => dispatch(itemHasErrored(true)));
        };
    }
