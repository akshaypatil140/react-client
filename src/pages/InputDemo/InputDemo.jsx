import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
  SelectField, RadioGroup, TextField, Button,
} from '../../Component';
import { btnContainer, inputDemoContainer, btnStyle } from './style';
import { SELECT_OPTIONS, RADIO_OPTIONS, CRICKET_VALUE } from '../../configs/constant';
import { getError, hasError, isTouched } from '../../lib/utils/helper';

const schema = Yup.object({
  name: Yup.string().min(3).max(10).label('Name')
    .required(),
  sport: Yup.string().required().label('Sport'),
  football: Yup.string().label('What you do?').when('sport', {
    is: (val) => val === 'football',
    then: Yup.string().required(),
    otherwise: Yup.string().min(0),
  }),
  cricket: Yup.string().label('What you do?').when('sport', {
    is: (val) => val === 'cricket',
    then: Yup.string().required(),
    otherwise: Yup.string().min(0),
  }),
});

const InputDemo = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [cricket, setCricket] = useState('');
  const [football, setFootball] = useState('');
  const [error, setError] = useState([]);
  const [bgColor, setBgColor] = useState('gray');
  const [touched, setTouched] = useState([]);

  const handleErrors = (formValues) => {
    const {
      name: newName, sport: newSport, cricket: newCricket, football: newFootball,
    } = formValues;

    schema.validate({
      name: newName, sport: newSport, football: newFootball, cricket: newCricket,
    }, { abortEarly: false }).then(() => {
      setName(name);
      setSport(sport);
      setCricket(cricket);
      setFootball(football);
    }).catch((errors) => {
      const schemaErrors = {};
      if (errors) {
        errors.inner.forEach((err) => { schemaErrors[err.path] = err.message; });
        setError(schemaErrors);
      }
    });
  };

  const onBlurHandler = (event, type) => {
    touched[type] = true;
    setTouched(touched);
    handleErrors({
      name, sport, football, cricket,
    });
  };

  const handleSportChange = async (event) => {
    setSport(event.target.value);
    setCricket('');
    setFootball('');
    handleErrors({
      name, sport, football, cricket,
    });
  };

  const handleNameChange = async (event) => {
    setName(event.target.value);
    // handleErrors({
    //   name, sport, football, cricket,
    // });
  };

  const handleSportProfileChange = async (event) => {
    if (event.target.value === CRICKET_VALUE) {
      setFootball('');
      setCricket(event.target.attributes.label.value);
    } else {
      setCricket('');
      setFootball(event.target.attributes.label.value);
    }
    // handleErrors({
    //   name, sport, football, cricket,
    // });
  };

  useEffect(() => {
    console.log({
      name, sport, cricket, football,
    });
    // console.log(error);
    setBgColor('#52a53d');
  });

  const onClick = () => {
  };

  return (
    <form style={inputDemoContainer}>
      <TextField
        onBlur={(event) => { onBlurHandler(event, 'name'); }}
        errorMessage={touched.name ? getError(error, 'name') : ''}
        label="Name"
        onChange={handleNameChange}
      />
      <SelectField
        onBlur={(event) => { onBlurHandler(event, 'sport'); }}
        error={touched.sport ? getError(error, 'sport') : ''}
        selectLabel="Select the game you want to play?"
        defaultText="Select"
        value={sport}
        options={SELECT_OPTIONS}
        onChange={handleSportChange}
      />
      <RadioGroup
        onBlur={(event) => { onBlurHandler(event, 'cricket'); }}
        error={touched.cricket ? getError(error, 'cricket') : ''}
        value={sport}
        options={RADIO_OPTIONS}
        onChange={handleSportProfileChange}
      />
      <div style={btnContainer}>
        <Button color="gray" style={btnStyle} value="Cancel" />
        <Button color={bgColor} style={btnStyle} value="Submit" disabled={hasError(error) || !isTouched(touched)} onClick={onClick} />
      </div>
    </form>
  );
};
export default InputDemo;
