import { useField } from "informed";
import { useIntl } from "react-intl";

const CustomSelectField = (props) => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  const { value, error, showError } = fieldState;

  const { setValue, setTouched } = fieldApi;

  const { label, id, ...rest } = userProps;

  const { formatMessage } = useIntl();

  return render(
    <div style={{ marginBottom: "1rem" }}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        {...rest}
        id={id}
        ref={ref}
        value={!value && value !== 0 ? "" : value}
        onChange={(e) => {
          setValue(e.target.value, e);
        }}
        onBlur={(e) => {
          setTouched(true, e);
        }}
        style={{
          padding: "0.5rem",
          border: "1px solid",
          borderColor: showError ? "red" : "#ccc",
          borderRadius: "4px",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <option value="" disabled>
          {formatMessage({ id: "Select a value" })}
        </option>

        <option value="India">India</option>
      </select>
      {/* {showError && error && (
        <small style={{ color: "red", fontSize: "0.8rem" }}>
          {formatMessage({ id: error })}
        </small>
      )} */}
    </div>
  );
};

export default CustomSelectField;
