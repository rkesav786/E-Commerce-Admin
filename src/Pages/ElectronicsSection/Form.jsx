import React, { useEffect, useState } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validate } from "../../Validators/mobileSectionValidators";
import { Input } from "../../Component/Input";
import UploadImage from "../../Component/Upload";
import { Dropdown } from "../../Component/Dropdown";

const renderHighlightTexts = ({ fields }) => (
  <div className="mt-3">
    {fields.map((item, index) => (
      <div key={index} className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h6>Highlight #{index + 1}</h6>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => fields.remove(index)}
            >
              Remove
            </button>
          </div>
          <Field
            name={`${item}.highlight_text`}
            type="text"
            component={Input}
            label="Highlight Text"
          />
        </div>
      </div>
    ))}
    <button
      type="button"
      className="btn btn-success btn-sm"
      onClick={() => fields.push({})}
    >
      Add highlight text
    </button>
  </div>
);

const renderOfferTexts = ({ fields }) => (
  <div className="mt-3">
    {fields.map((item, index) => (
      <div key={index} className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h6>Offer #{index + 1}</h6>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => fields.remove(index)}
            >
              Remove
            </button>
          </div>
          <Field
            name={`${item}.offer_text`}
            type="text"
            component={Input}
            label="Available Offers Text"
          />
        </div>
      </div>
    ))}
    <button
      type="button"
      className="btn btn-success btn-sm"
      onClick={() => fields.push({})}
    >
      Add Available offer text
    </button>
  </div>
);

const renderItems = ({ fields, meta: { error, submitFailed } }) => (
  <div className="mt-3">
    {submitFailed && error && <span className="text-danger">{error}</span>}

    {fields.map((item, index) => (
      <div key={index} className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5>Catalogue #{index + 1}</h5>
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
          {/* <Field
            name={`${item}.description`}
            type="text"
            component={Input}
            label="Description"
          /> */}
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
            label="Rating"
          />
          <Field
            name={`${item}.image`}
            type="file"
            component={UploadImage}
            label="Image"
          />
          <h4 className="mt-3">Catalogue Details</h4>
          <h6 className="mt-3">Available Offers Text</h6>
          <FieldArray
            name={`${item}.offer_texts`}
            component={renderOfferTexts}
          />
          <FieldArray
            name={`${item}.highlight_texts`}
            component={renderHighlightTexts}
          />
          <h6 className="mt-3"> Specifications Text</h6>
          <div>
            <Field
              name={`${item}.model_name`}
              type="text"
              component={Input}
              label="Model Name"
            />
            <Field
              name={`${item}.model_number`}
              type="text"
              component={Input}
              label="Model Number"
            />
            <Field
              name={`${item}.color`}
              type="text"
              component={Dropdown}
              label="Color"
              options={{
                blue: "Blue",
                red: "Red",
                black: "Black",
                white: "White",
                green: "Green",
                yellow: "Yellow",
                orange: "Orange",
                purple: "Purple",
                pink: "Pink",
                gray: "Gray",
                brown: "Brown",
              }}
            />
            <Field
              name={`${item}.compatible_devices`}
              type="text"
              component={Dropdown}
              label="Compatible Devices"
              options={{
                computer: "Computer",
                laptop: "Laptop",
                mobile: "Mobile",
              }}
            />
            <Field
              name={`${item}.bluetooth`}
              type="text"
              component={Dropdown}
              label="Bluetooth"
              options={{ yes: "Yes", no: "No" }}
            />
          </div>
        </div>
      </div>
    ))}
    <button
      type="button"
      className="btn btn-success btn-sm"
      onClick={() => fields.push({})}
    >
      Add Item
    </button>
  </div>
);

const ElectronicsSection = ({
  handleSubmit,
  initialize,
  pristine,
  submitting,
}) => {
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
      const response = await fetch(`${apiUrl}/api/electronics-section/${id}`);
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
      const response = await fetch(`${apiUrl}/api/electronics-section`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, _id: id }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(id ? "Updated successfully" : "Created successfully");
        navigate("/electronics-section");
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
        {id ? "Edit Electronics Section" : "Create Electronics Section"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="section_name"
          type="text"
          component={Input}
          label="Catagory Name"
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
            onClick={() => navigate("/electronics-section")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "electronicsSectionForm",
  validate,
})(ElectronicsSection);
