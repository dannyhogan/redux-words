import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getWordsBySearchTerm } from '../../selectors/wordsSelectors';

const mapStateToProps = (state, props) => ({
  words: getWordsBySearchTerm(state, props.match.params.count)
});

export default connect(
  mapStateToProps
)(Words);
