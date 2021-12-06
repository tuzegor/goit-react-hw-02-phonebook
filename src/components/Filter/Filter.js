import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

function Filter({ filter, findName }) {
  return (
    <label className={style.title}>
      Find contacts by name
      <input
        className={style.field}
        type="text"
        value={filter}
        onChange={findName}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  findName: PropTypes.func,
};

export default Filter;
