import { useState } from "react";
  import states from "../State"; 

  const useFormValidation = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      country: "",
      pincode: "",
      state: "",
      district: "",
      messages: "",
      phone: "",
    });

    const [errors, setErrors] = useState({});
    const [districts, setDistricts] = useState([]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;

      if (name === "phone") {

        const numericValue = value.replace(/\D/g, "");
        setFormData((prevState) => ({
          ...prevState,
          [name]: numericValue,
        }));

        if (numericValue.length < 10) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            phone: "Minimum 10 digits are required",
          }));
        } else {

          setErrors((prevErrors) => {
            const { phone, ...rest } = prevErrors;
            return rest;
          });
        }
      } else if (name === "pincode") {
        const numericValue = value.replace(/\D/g, "");
        if (numericValue.length <= 6) {
          setFormData((prevState) => ({
            ...prevState,
            [name]: numericValue, 
          }));
        }
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }

    
      if (name === "state") {
        const selectedState = states.states.find((state) => state.state === value);
        setDistricts(selectedState ? selectedState.districts : []);
      }
    };

    const validateForm = () => {
      const newErrors = {};

      if (!formData.firstName || !/^[a-zA-Z\s]+$/.test(formData.firstName)) {
        newErrors.firstName = "First name is required and cannot contain special characters.";
      }

      if (!formData.lastName || !/^[a-zAZ\s]+$/.test(formData.lastName)) {
        newErrors.lastName = "Last name is required and cannot contain special characters.";
      }

      if (!formData.street) {
        newErrors.street = "Street is required.";
      }

      if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) {
        newErrors.pincode = "Pincode is required and must be a 6-digit number.";
      }

      if (!formData.state) {
        newErrors.state = "State is required.";
      } else if (!formData.district) {
        newErrors.district = "District is required.";
      }

      if (!formData.phone) {
        newErrors.phone = "Phone number is required.";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone number must be exactly 10 digits.";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => { 
      e.preventDefault();

      if (validateForm()) {
        console.log("Form data submitted: ", formData);
      }
    };

    return {
      formData,
      errors,
      handleInputChange,
      handleSubmit,
      districts,
    };
  };

  export default useFormValidation;