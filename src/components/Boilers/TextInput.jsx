import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ input, meta, label, placeholder }) => (
  <>
    <label>{label}</label>
    <input {...input} type="text" placeholder={placeholder} />
    {meta.error && meta.touched && <div>{meta.error}</div>}
  </>
);

// PropTypes
TextInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;
