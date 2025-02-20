import React, { Fragment } from "react";
import { Form, ArrayField, Checkbox } from "informed";
import { useIntl } from "react-intl";

const CustomCheckboxGroup = () => {
  const { formatMessage } = useIntl(); 

  const options = ["Reading", "Traveling", "Sports", "Music", "Movies"];
  
  return (
    <Fragment>
      <h5 className="mb-4">{formatMessage({ id: "select interests" })}</h5> 
      <ArrayField field="hobbies">
        {({
          add,
          remove,
          reset,
          clear,
          addWithInitialValue,
          fields,
          name,
          swap,
        }) => (
          <div className="flex flex-wrap gap-6">
            {options.map((interest) => (
              <div key={interest} className="form-check flex items-center">
                <Checkbox
                  field={`hobbies[${interest}]`}
                  className="form-check-input"
                  id={interest}
                />
                <label className="form-check-label ml-2" htmlFor={interest}>
                  {formatMessage({ id: interest })} 
                </label>
              </div>
            ))}
          </div>
        )}
      </ArrayField>
    </Fragment>
  );
};

export default CustomCheckboxGroup;
