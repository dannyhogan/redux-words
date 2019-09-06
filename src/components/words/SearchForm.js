import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ searchInput, handleChange }) {
  return (
    <form>
      <label>Search for a word:</label>
      <input value={searchInput} name="input" onChange={handleChange}></input>
    </form>
  );
}

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired
};
