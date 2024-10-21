/**
 * Validate a single field based on its properties.
 * @param {Object} field
 * @param {any} value
 * @returns {string}
 */
export const validateField = (field, value) => {
  let error = '';

  if (field.required && !value) {
    error = `${field.placeholder} is required.`;
  } else if (field.pattern && !field.pattern.test(value)) {
    error = `Invalid ${field.placeholder}.`;
  } else if (field.min !== undefined && value < field.min) {
    error = `${field.placeholder} must be at least ${field.min}.`;
  } else if (field.max !== undefined && value > field.max) {
    error = `${field.placeholder} cannot exceed ${field.max}.`;
  }

  return error;
};

/**
 * Validate multiple fields and return any validation errors.
 * @param {Array} fields
 * @param {Object} values
 * @returns {Object}
 */
export const validateFields = (fields, values) => {
  const errors = {};

  fields.forEach((field) => {
    const error = validateField(field, values[field.key]);
    if (error) errors[field.key] = error;
  });

  return errors;
};
