import PropTypes from 'prop-types';
import React from 'react';
import { selectInput } from './style';
import '../../App.css';

const SelectField = (props) => {
  const {
    value, error, onChange, options, defaultText,
  } = props;

  return (
    <div>
      <div>
        <b>
          Select the game you want to play?
        </b>
      </div>
      <br />
      <div>
        <select id="customSelect" style={selectInput} value={value} onChange={onChange}>
          <option id="customOption" key={defaultText} value={defaultText}>{defaultText}</option>
          {
            options.map((item) => {
              const { value: selectValue, label } = item;
              return <option id="customOption" key={label} value={selectValue}>{label}</option>;
            })
          }
        </select>
      </div>
      <p>{error}</p>
    </div>
  );
};
SelectField.defaultProps = {
  error: '',
};

SelectField.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf.isRequired,
  defaultText: PropTypes.string.isRequired,
};

export default SelectField;
