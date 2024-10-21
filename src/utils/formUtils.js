// utils/formUtils.js

/**
 * Calculate the number of filled fields and the progress percentage.
 * @param {Object} employee
 * @param {Array} fields
 * @returns {Object} 
 */
export const calculateProgress = (employee, fields) => {
  const filledFields = fields.filter(
    (field) => employee[field.key] && employee[field.key].trim() !== ''
  ).length;

  const progressPercentage = Math.round((filledFields / fields.length) * 100);

  return { filledFields, progressPercentage };
};

export const formatSalary = (salary) =>
  new Intl.NumberFormat('en-IN', { style: 'decimal' }).format(salary);
