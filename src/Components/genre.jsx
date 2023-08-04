import React from 'react';
import PropTypes from 'prop-types';

export default function Genre({ genres }) {
  return (
    <>
      <li>{genres}</li>
    </>
  );
}

Genre.propTypes = {
  genres: PropTypes.string.isRequired,
};
