import React from "react";
import { InputGroup, Input, Label } from "./styles/form-input";

const FormInput = ({ handleChange, label, name, ...props }) => {
  return (
    <InputGroup>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Input onChange={handleChange} name={name} {...props} />
    </InputGroup>
  );
};

export default FormInput;
