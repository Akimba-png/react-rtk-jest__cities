import PropTypes from 'prop-types';

export default PropTypes.shape({
  isExact: PropTypes.bool,
  params: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string,
});
