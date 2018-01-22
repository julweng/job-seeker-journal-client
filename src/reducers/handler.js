import { TOGGLE_OPEN } from '../actions/handler';

const initialState = {
  isOpen: false
}

export const handlers = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state;
  }
}
