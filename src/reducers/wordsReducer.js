import words from '../fixtures/words.json';
import { UPDATE_SEARCH_TERM } from '../actions/wordActions';

const initialState = {
  dictionary: words,
  search: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM: {
      return { ...state, search: action.payload };
    }
    default:
      return state;
  }
}
