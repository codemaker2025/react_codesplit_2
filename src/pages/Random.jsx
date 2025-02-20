import React from "react";
import { Form, Select, useFormApi, useFormState } from "informed";

const onSubmit = ({ values }) => console.log(values);

const data = {
  Kerala: ["Trivandrum", "Kollam", "Ernakulam"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  TamilNadu: ["Chennai", "Madurai", "Coimbatore"],
};

function DistrictSelect({ data }) {
  const formState = useFormState();
  const selectedState = formState.values?.state;
  const districts = data[selectedState] || [];

  return (
    <Select name="district" initialValue="" disabled={!selectedState}>
      <option value="" disabled>
        Select District
      </option>
      {districts.map((district) => (
        <option key={district} value={district}>
          {district}
        </option>
      ))}
    </Select>
  );
}

export default function Test() {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="state">State</label>
      <Select name="state" id="state" initialValue="">
        <option value="" disabled>
          Select State
        </option>
        {Object.keys(data).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Select>

      <label htmlFor="district">District</label>
      <DistrictSelect data={data} />

      <button type="submit">Submit</button>
    </Form>
  );
}
