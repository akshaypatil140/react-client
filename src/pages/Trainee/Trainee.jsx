import React, { useState } from 'react';

import { AddDialog } from './component';
import { NavBar } from '../components';
import { traineeFormValidationSchema } from '../../validations/validation';

const Trainee = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    touched: {
      name: false,
      email: false,
      password: false,
      confirmPassword: false,
    },
    errors: {},
  };
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState(initialState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormValue(initialState);
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log({ name: formValue.name, email: formValue.email, password: formValue.password });
  };

  const validateFormData = async (value, type) => {
    try {
      await traineeFormValidationSchema.validate({
        ...formValue, [type]: value,
      }, {
        abortEarly: false,
      });
      setFormValue({
        ...formValue,
        [type]: value,
        touched: { ...formValue.touched, [type]: true },
        errors: {},
      });
    } catch (err) {
      const formErrors = {};
      if (err) {
        err.inner.forEach((errorItem) => {
          formErrors[errorItem.path] = errorItem.message;
        });
      }
      setFormValue({
        ...formValue,
        [type]: value,
        touched: { ...formValue.touched, [type]: true },
        errors: formErrors,
      });
    }
  };

  const handleChange = (event) => {
    const { value, name: type } = event.target;
    validateFormData(value, type);
  };

  const handleBlur = (event) => {
    const { value, name: type } = event.target;
    validateFormData(value, type);
  };

  return (
    <>
      <NavBar />
      <AddDialog
        open={open}
        onClick={handleClickOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onBlur={handleBlur}
        data={formValue}
      />
    </>
  );
};

export default Trainee;
