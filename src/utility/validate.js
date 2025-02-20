// validate.js

export const validateTextField = (value) => {
    const regex = /^[a-zA-Z\s]*$/; // Only allows letters and spaces
    return regex.test(value) ? '' : 'Only letters and spaces are allowed';
  };
  
  export const validatePincode = (value) => {
    const regex = /^[0-9]{6}$/; // Only accepts 6 digits
    return regex.test(value) ? '' : 'Pincode must be a 6-digit number';
  };
  
  export const validateRequired = (value) => {
    return value ? '' : 'This field is required';
  };
  
  export const validateForm = (formData) => {
    const errors = {};
    
    errors.firstName = validateRequired(formData.firstName) || validateTextField(formData.firstName);
    errors.lastName = validateRequired(formData.lastName) || validateTextField(formData.lastName);
    errors.street = validateRequired(formData.street);
    errors.city = validateRequired(formData.city);
    errors.pincode = validateRequired(formData.pincode) || validatePincode(formData.pincode);
    errors.state = validateRequired(formData.state);
    errors.district = validateRequired(formData.district);
    
    return errors;
  };
  