import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnType, children }) {
  // tu następuje destrykturyzacja przekazanych propsów
  return <button type={btnType}>{children}</button>;
}

Button.defaultProps = {
  btnType: 'button',
  children: null,
};

Button.propTypes = {
  btnType: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
