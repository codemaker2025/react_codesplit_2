import React from "react";
import { useField } from "informed";

const InformTextArea = (props) => {
  const { render, informed, userProps, fieldApi, fieldState, ref } = useField({
    ...props,
  });

  const { value, error, showError } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { label, id, rows, ...rest } = userProps;

  return render(
    <div style={{ marginBottom: "1rem" }}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        {...rest}
        id={id}
        ref={ref}
        value={value ?? ""}
        rows={rows || 4}
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
          resize: "vertical",
        }}
      />
      {showError && error && (
        <small style={{ color: "red", fontSize: "0.8rem" }}>{error}</small>
      )}
    </div>
  );
};

export default InformTextArea;
