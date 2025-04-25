import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};
const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <>
      <div>
        <label htmlFor={props.id}>{label}</label>
        <input type="date" {...props} />
      </div>
    </>
  );
};

export default DateInput;
