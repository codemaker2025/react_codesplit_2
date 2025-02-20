import { useState } from 'react'
import useToast from './Toast/useToast'
import { 
  validateName, 
  validateRequired, 
  validatePincode, 
  validateContactNumber, 
  validateForm, 
} from '../utils/Validate'
import StatesData from '../api/data.json';

const initialData = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  country: 'India',
  pincode: '',
  message: '',
  district: '',
  state: '',
  contactNumber: '', 
  file: null,  
};

const useForm = () => {
  const [details, setDetails] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [selectedState, setSelectedState] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const { showSuccess } = useToast()

  const validateField = (name, value) => {
    let error = ''

    switch (name) {
      case 'firstName':
      case 'lastName':
        error = validateName(value, name)
        break
      case 'street':
      case 'city':
        error = validateRequired(value, name)
        break
      case 'pincode':
        error = validatePincode(value)
        break
      case 'contactNumber': 
        error = validateContactNumber(value)
        break
      case 'state':
        if (!selectedState) {
          error = "Please select a state."
        }
        break
      case 'district':
        if (!selectedDistrict) {
          error = "Please select a district."
        }
        break
      case 'file':  
        if (!value) {
          error = "Please upload a file."
        } else if (!value.type.startsWith('image/')) {  
          error = "Only image files are allowed."
        } else if (value.size > 5 * 1024 * 1024) { 
          error = "File size must be less than 5MB."
        }
        break
      default:
        break
    }

    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)

    setDetails((prev) => ({
      ...prev,
      [name]: name === 'pincode' || name === 'contactNumber' ? value.replace(/[^0-9]/g, '') : value,
    }))
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const error = validateField('file', file)

    setDetails((prev) => ({
      ...prev,
      file: file,
    }))
    setErrors((prev) => ({
      ...prev,
      file: error,
    }))
  }

  const handleStateChange = (e) => {
    setSelectedState(e.target.value)
    setSelectedDistrict('') // Reset district on state change
    setErrors((prev) => ({
      ...prev,
      state: null, // Reset state error
      district: null, // Reset district error
    }))
    setDetails((prev) => ({
      ...prev,
      state: e.target.value,
    }))
  }

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value)
    setErrors((prev) => ({
      ...prev,
      district: null, // Reset district error
    }))
    setDetails((prev) => ({
      ...prev,
      district: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Form validation before submit
    const newErrors = {
      ...validateForm(details),
      state: selectedState ? null : "Please select a state.",
      district: selectedDistrict ? null : "Please select a district.",
      file: details.file ? null : "Please upload a file.",  // Check if file is uploaded
    }
    setErrors(newErrors)

    if (Object.keys(newErrors).every((key) => newErrors[key] === null)) {
      console.log(details);
      showSuccess("Your response has been recorded.")

      // Reset form after successful submission
      setDetails(initialData)
      setSelectedState('')
      setSelectedDistrict('')
      setErrors({})
    }
  }

  const allStates = StatesData.states.map((e) => e.state)
  const districts = StatesData.states.find((e) => e.state === selectedState)?.districts || []

  return {
    details,
    errors,
    selectedState,
    selectedDistrict,
    handleChange,
    handleFileChange,
    handleStateChange,
    handleDistrictChange,
    handleSubmit,
    allStates,
    districts
  }
}

export default useForm
