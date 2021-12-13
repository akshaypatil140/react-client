export const hasErrors = (data) => {
  const { errors } = data;
  const fields = Object.keys(errors);
  return fields.length;
};

export const isTouched = (data) => {
  const { touched } = data;
  const fields = Object.keys(touched);
  const touchValue = fields.filter((field) => touched[field] === true);
  if (touchValue.length === 4) {
    return true;
  }
  return false;
};
export const getError = (touched, errors, field) => {
  if (touched[field]) {
    return errors[field] || '';
  }
  return null;
};
