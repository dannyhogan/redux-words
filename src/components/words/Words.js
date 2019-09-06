import React from 'react';
import PropTypes from 'prop-types';

export default function Words({ words }) {

  const wordsArray = words.map((word, i) => {
    return <li key={i}>
      <p>{word}</p>
    </li>;
  });

  return (
    <>
      <ul>{wordsArray}</ul>
    </>
  );
}

Words.propTypes = {
  words: PropTypes.array.isRequired
};
