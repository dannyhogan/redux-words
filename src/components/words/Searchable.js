import React from 'react';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';
import PropTypes from 'prop-types';

export default function Searchable({ match }) {

  return (
    <>
      <SearchWords />
      <TopWords match={match} />
    </>
  );
}

Searchable.propTypes = {
  match: PropTypes.object.isRequired
};
