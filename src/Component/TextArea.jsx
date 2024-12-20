export const Textarea = ({ input, label, meta }) => (
  <div className="form-group mt-2 mb-2">
    <label>{label}</label>
    <textarea {...input} className="form-control" rows="5" />
    {meta.touched && meta.error && (
      <span className="text-danger">{meta.error}</span>
    )}
  </div>
);
