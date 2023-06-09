import React from 'react';
import PropTypes from 'prop-types';
import {FilterName, FilterInput} from './Filter.styled'

const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterName>
      Find contacts by Name
      <FilterInput
        type="text"
        value={value}
        onChange={onChangeFilter}
      ></FilterInput>
    </FilterName>
  );
};

Filter.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};

export default Filter;
