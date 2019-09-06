import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm } from '../../actions/wordActions';
import { getSearchTerm } from '../../selectors/wordsSelectors';

const mapStateToProps = state => ({
  searchInput: getSearchTerm(state),
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
