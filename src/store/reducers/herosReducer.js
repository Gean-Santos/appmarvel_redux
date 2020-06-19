import { LOAD_CHARACTERS, CLICK_CHARACTER, LOAD_LETTERS } from '../actions/actionTypes';
const INITIAL_STATE = {
  content: [
    {
      letters: [],
      characters: [],
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOAD_CHARACTERS: 
      return {...state, characters: action.payload};
    case LOAD_LETTERS: 
      return {...state, letters: action.payload};
    default: 
      return state;
  }
}