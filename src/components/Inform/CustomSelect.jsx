import {
  Relevant,
  useField,
  useFormApi,
  useFormState,
  useInformedApi,
} from "informed";
import rawData from "../../api/data.json";
import ReactSelect from "react-select";
import { useIntl } from "react-intl";

function parseData(rawData) {
  const stateDistrictMap = {};
  rawData.states.forEach(({ state, districts }) => {
    stateDistrictMap[state] = districts;
  });
  return stateDistrictMap;
}

const stateDistrictMap = parseData(rawData);

function DistrictSelect({ data }) {
  const { values } = useFormState();
  const { fieldState, fieldApi, render, ref } = useField({
    field: "district",
    validate: (value) => (!value ? "Please select a district" : undefined),
  });

  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;

  const selectedState = values?.state || values?.address?.state;
  const districts = data[selectedState] || [];

  const districtOptions = districts.map((district) => ({
    label: district,
    value: district,
  }));

  const handleChange = (selectedOption) => {
    console.log(selectedOption);

    setValue(selectedOption ? selectedOption.value : "");
  };

  const { formatMessage } = useIntl();

  return render(
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="district">{formatMessage({ id: "District" })}</label>
      <ReactSelect
        id="district"
        ref={ref}
        value={value ? { label: value, value } : null}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        options={districtOptions}
        isDisabled={!selectedState}
        placeholder={formatMessage({ id: "Select District" })}
        className="react-select"
        validate={(value) =>
          !value ? formatMessage({ id: "Select District" }) : undefined
        }
      />
      {showError && error && (
        <small style={{ color: "red", fontSize: "0.8rem" }}>
          {formatMessage({ id: error })}
        </small>
      )}
    </div>
  );
}

const CustomSelect = ({ ...props }) => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);
  const { label, id, validate, ...rest } = userProps;
  const { value, error, showError } = fieldState;
  const formApi = useFormApi();
  const { setValue, setTouched } = fieldApi;

  const { formatMessage } = useIntl();

  const handleChange = (selectedOption) => {
    setValue(selectedOption ? selectedOption.value : "");
    formApi.setValue("district", "");
  };

  return render(
    <>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor={id}>{label}</label>
        <ReactSelect
          {...rest}
          id={id}
          ref={ref}
          value={value ? { label: value, value } : null}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          options={Object.keys(stateDistrictMap).map((state) => ({
            label: state,
            value: state,
          }))}
          placeholder={formatMessage({ id: "Select State" })}
          className="react-select"
        />
        {showError && error && (
          <small style={{ color: "red", fontSize: "0.8rem" }}>
            {formatMessage({ id: "Select State", defaultMessage: "fallback" })}
          </small>
        )}

        {/* <Relevant
          when={({ formState }) =>
            !!formState.values.state || !!formState.values.address?.state
          }
        > */}
          <DistrictSelect data={stateDistrictMap} />
        {/* </Relevant> */}
      </div>
    </>
  );
};

export default CustomSelect;
