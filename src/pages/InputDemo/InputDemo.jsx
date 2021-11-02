import React, { useEffect, useState } from 'react';
import { SelectField, RadioGroup, TextField } from '../../Component';
import { inputDemoContainer } from './style';
import { selectOptions, radioOptions } from '../../configs/constant';

const TextFieldDemo = () => {
  const [value, setValue] = useState({
    name: '',
    sport: '',
    cricket: '',
    football: '',
  });

  const handleSportChange = (event) => {
    setValue({
      name: value.name,
      sport: event.target.value,
      cricket: '',
      football: '',
    });
  };

  const handleNameChange = (event) => {
    setValue({
      name: event.target.value,
      sport: value.sport,
      cricket: value.cricket,
      football: value.football,
    });
  };

  const handleSportProfileChange = (event) => {
    setValue({
      name: value.name,
      sport: value.sport,
      cricket: value.sport && value.sport === 'cricket' ? event.target.attributes.label.value : '',
      football: value.sport && value.sport === 'football' ? event.target.attributes.label.value : '',
    });
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(value);
  });

  return (
    <div style={inputDemoContainer}>
      <TextField label="Name" onChange={handleNameChange} value={value.name} error="" />
      <SelectField defaultText="Select" value={value.sport} options={selectOptions} onChange={handleSportChange} />
      <RadioGroup value={value.sport} options={radioOptions} onChange={handleSportProfileChange} />
    </div>
  );
};

export default TextFieldDemo;
