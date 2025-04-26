import React from "react";

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  borderRadius: "var(--gap)",
  backgroundColor: "var(--color-4)",
};
const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};
const inputStyle: React.CSSProperties = {
  fontFamily: "monospace",
  border: "none",
  ...generalStyle,
};
type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};
const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <>
      <div>
        <label style={labelStyle} htmlFor={props.id}>
          {label}
        </label>
        <input style={inputStyle} type="date" {...props} />
      </div>
    </>
  );
};

export default DateInput;
