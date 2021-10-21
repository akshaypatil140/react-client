export const getError = (error, field) => error[field];
export const hasError = (error) => (!!error.length);
export const isTouched = (touched) => {
  let flag = true;
  touched.forEach((element) => {
    if (!element) {
      flag = true;
    }
  });
  return flag;
};
