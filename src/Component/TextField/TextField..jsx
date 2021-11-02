import * as React from 'react';
import { PropTypes } from 'prop-types';
import { errors, errorBorder, inputSize } from './style';

const TextField = (props) => {
  const {
    label, value, disabled, errorMessage, onChange, error,
  } = props;
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <>
      <label htmlFor>
        <b>{label}</b>
        <input name="name" onChange={onChange} style={errorMessage ? errorBorder : inputSize} type="text" value={value} disabled={disabled} error={error} />
      </label>
      <div style={errors}>{error}</div>
    </>
  );
};
TextField.defaultProps = {
  error: '',
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default TextField;
