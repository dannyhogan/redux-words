export function getWords(state) { return state.words.dictionary; }

export const getSearchTerm = state => state.words.search;

export const getWordsFromCount = (state, count) => {
  return getWords(state).slice(0, count);
};

export const getWordsBySearchTerm = (state, count = 1000) => {
  return getWords(state).filter(word =>  word.includes(state.words.search)).slice(0, count);
};
