export const Input = ({ input, label, type, meta }) => (
  <div className="form-group mt-2 mb-2">
    <label className="mb-1 fs-6 fw-bold">{label}</label>
    <input {...input} type={type} className="form-control" />
    {meta.touched && meta.error && (
      <span className="text-danger">{meta.error}</span>
    )}
  </div>
);
