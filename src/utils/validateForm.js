import validator from 'validator';

// Helper function for validating form field.
const getValidatedField = (name, value, type, errorText, isRequired) => {
  const conditions = {
    text: value.length > 0,
    email: value.length > 0 && validator.isEmail(value),
    textarea: value.length > 0,
    checkbox: value === true,
  };

  if (!isRequired) {
    return { isValid: true, errorText: '' };
  }

  return {
    isValid: conditions[type],
    errorText: conditions[type] ? '' : errorText,
  };
};

export default getValidatedField;
