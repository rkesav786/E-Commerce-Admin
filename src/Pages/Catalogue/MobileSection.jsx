import React, { useEffect, useState } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validate } from "../../Validators/mobileSectionValidators";
import { Input } from "../../Component/Input";
import UploadImage from "../../Component/Upload";
// Inside MobileSection.jsx

const renderField = ({
  input: { onChange, value, ...input },
  label,
  type,
  meta: { touched, error },
}) => {
  const inputProps =
    type === "file"
      ? {
          onChange: (e) => onChange(e.target.files[0]),
          type,
          value: undefined, // Remove value prop for file inputs
        }
      : { ...input, type, value };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input {...inputProps} className="form-control" />
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  );
};

const renderItems = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4>Items</h4>
      <button
        type="button"
        className="btn btn-success btn-sm"
        onClick={() => fields.push({})}
      >
        Add Item
      </button>
    </div>

    {submitFailed && error && <span className="text-danger">{error}</span>}

    {fields.map((item, index) => (
      <div key={index} className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5>Item #{index + 1}</h5>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => fields.remove(index)}
            >
              Remove
            </button>
          </div>

          <Field
            name={`${item}.name`}
            type="text"
            component={Input}
            label="Name"
          />
          <Field
            name={`${item}.description`}
            type="text"
            component={Input}
            label="Description"
          />
          <Field
            name={`${item}.price`}
            type="number"
            component={Input}
            label="Price"
          />
          <Field
            name={`${item}.offer_price`}
            type="number"
            component={Input}
            label="Offer Price"
          />
          <Field
            name={`${item}.tag`}
            type="text"
            component={Input}
            label="Tag"
          />
          <Field
            name={`${item}.image`}
            type="file"
            component={UploadImage}
            label="Image"
          />
        </div>
      </div>
    ))}
  </div>
);

const MobileSection = ({ handleSubmit, initialize, pristine, submitting }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_ECOMMERCE_ADMIN_API;

  useEffect(() => {
    if (id) {
      fetchSection();
    }
  }, [id]);

  const fetchSection = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/api/mobile-section/${id}`);
      const data = await response.json();

      if (data.success) {
        initialize(data.section);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch section");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (values) => {
    try {
      const response = await fetch(`${apiUrl}/api/mobile-section`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, _id: id }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(id ? "Updated successfully" : "Created successfully");
        navigate("/mobile-section");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to save section");
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        {id ? "Edit Mobile Section" : "Create Mobile Section"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="section_name"
          type="text"
          component={Input}
          label="Section Name"
        />

        <FieldArray name="items" component={renderItems} />

        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={pristine || submitting}
          >
            {submitting ? "Saving..." : id ? "Update" : "Create"}
          </button>

          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => navigate("/mobile-section")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "mobileSectionForm",
  validate,
})(MobileSection);
