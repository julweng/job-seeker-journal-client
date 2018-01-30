import {
  ITEM_HAS_ERRORED,
  ITEM_IS_LOADING,
  ITEM_FETCH_DATA_SUCCESS
} from '../actions/users';

const initialState = {
  hasErrored: false,
  isLoading: false,
  item: []
}

export const users = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_HAS_ERRORED:
      return action.hasError;
    case ITEM_IS_LOADING:
      return action.isLoading;
    case ITEM_FETCH_DATA_SUCCESS:
      return action.items;
    default:
      return state;
  }
}


export function items(state = initialState, action) {
  switch (action.type) {
    case ITEM_FETCH_DATA_SUCCESS:
      return action.items;
    default:
      return state;
    }
}
