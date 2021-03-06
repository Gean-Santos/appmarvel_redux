import { LOAD_CHARACTERS, LOAD_LETTERS, SEARCH_BY_LETTER, HERO_DETAILS, MODAL_VISIBLE } from '../actions/actionTypes';
const INITIAL_STATE = {
  content: [
    {
      letters: [],
      characters: [],
      hero: [],
      isVisible: false,
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOAD_CHARACTERS: 
      return {...state, characters: action.payload};
    case LOAD_LETTERS: 
      return {...state, letters: action.payload};
    case SEARCH_BY_LETTER:
      return { ...state, characters: action.payload};
    case HERO_DETAILS:
      return { ...state, hero: action.payload };
    case MODAL_VISIBLE:
      return { ...state, isVisible: action.payload }
    default: 
      return state;
  }
}