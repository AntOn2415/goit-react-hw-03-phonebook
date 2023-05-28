import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={css.filter}>
      Find contacts by Name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={onChangeFilter}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};

export default Filter;
