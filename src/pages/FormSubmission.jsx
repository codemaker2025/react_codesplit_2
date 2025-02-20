import { Form, Button, Row, Col } from 'react-bootstrap';
import useForm from '../hooks/useForm'; 
import InputField from '../components/Form/InputField'; 
import SelectField from '../components/Form/SelectField'; 
import TextAreaField from '../components/Form/TextAreaField'; 
import NumberField from '../components/Form/NumberField'; 
import SingleFileUpload from '../components/FileUpload/FileUpload';



const FormSubPage = () => {
  const {
    details,
    errors,
    selectedState,
    selectedDistrict,
    handleChange,
    handleStateChange,
    handleDistrictChange,
    handleSubmit,
    handleFileChange,
    allStates,
    districts
  } = useForm();

  

  return (
    <div className="container mt-5 ">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Col md={6}>
            <InputField
              name="firstName"
              label="First Name"
              value={details.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              error={errors.firstName}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <InputField
              name="lastName"
              label="Last Name"
              value={details.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              error={errors.lastName}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <NumberField
              name="contactNumber"
              label="Contact Number"
              value={details.contactNumber}
              onChange={handleChange}
              placeholder="Enter your contact number"
              error={errors.contactNumber}
              min={1000000000} 
              max={9999999999}  
              step={1}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <InputField
              name="street"
              label="Street"
              value={details.street}
              onChange={handleChange}
              placeholder="Enter street"
              error={errors.street}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <InputField
              name="city"
              label="City"
              value={details.city}
              onChange={handleChange}
              placeholder="Enter city"
              error={errors.city}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <SelectField
              name="country"
              label="Country"
              value={details.country}
              onChange={handleChange}
              options={['India']}
              disabled
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <InputField
              name="pincode"
              label="Pincode"
              value={details.pincode}
              onChange={handleChange}
              placeholder="Enter pincode"
              error={errors.pincode}
              maxLength={6}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <TextAreaField
              name="message"
              label="Message (Optional)"
              value={details.message}
              onChange={handleChange}
              placeholder="Enter your message"
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <SelectField
              name="state"
              label="State"
              value={selectedState}
              onChange={handleStateChange}
              options={allStates}
              error={errors.state}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <SelectField
              name="district"
              label="District"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              options={districts}
              error={errors.district}
              disabled={!districts.length}
            />
          </Col>
        </Row>
        <SingleFileUpload
          file={details.file}
          onFileChange={handleFileChange}  // Pass the file change handler
          error={errors.file}  // Pass error for file upload
        />
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormSubPage;
