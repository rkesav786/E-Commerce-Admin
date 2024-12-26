export const Dropdown = ({ input, label, options, meta }) => (
  <div className="form-group mt-3 mb-3">
    <label className="fs-6 mb-1 fw-bold">{label}</label>
    <select {...input} className="form-control">
      <option value="">Select Option</option>
      {Object.keys(options).map((key) => (
        <option key={key} value={key}>
          {options[key]}
        </option>
      ))}
    </select>
    {meta.touched && meta.error && (
      <span className="text-danger">{meta.error}</span>
    )}
  </div>
);
