import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.module.css';

function InputGroup({ id, type, label, handleChange, inputValue }) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input type={type} id={id} onChange={handleChange} value={inputValue} />
      </label>
    </div>
  );
}

InputGroup.defaultProps = {
  id: 'noID',
  type: 'text',
  label: 'No label given - loaded from default props',
  handleChange: null,
  inputValue: 'No input value given - loaded from default props',
};

InputGroup.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  inputValue: PropTypes.string,
};

export default InputGroup;
