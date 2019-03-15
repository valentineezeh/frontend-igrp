import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextField = ({
  field,
  value,
  error,
  type,
  onChange,
  id,
  placeholder
}) => (
  <div className={classnames({ "text-danger": error })}>
    <input
      type={type}
      name={field}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      required
      className="form-control"
    />
    {error && <p className="text-danger">{error}</p>}
  </div>
);

TextField.propTypes = {
  field: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.instanceOf(Array),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string
};

export default TextField;
