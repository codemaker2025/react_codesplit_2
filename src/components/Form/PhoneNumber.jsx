import React from "react";
import { useIntl } from "react-intl";
import NumberField from "../Inform/NumberInput";
import InformInput from "../Inform/InformInput";

export default function PhoneNumber({ validateNumber }) {
  const { formatMessage } = useIntl();

  return (
    <div className="form-group">
      <div style={{ display: "flex", alignItems: "center" }}>
        <InformInput
          id="phoneNumber"
          name="phoneNumber"
          label={formatMessage({ id: "Phone Number" })}
          validateOn="change"
          placeholder={formatMessage({ id: "Enter your number" })}
          validate={validateNumber}
          showErrorIfError
          formatter="+91 ##### #####"
        />
      </div>
    </div>
  );
}
