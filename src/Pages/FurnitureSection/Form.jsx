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
              name={`${item}.model_number`}
              type="text"
              component={Input}
              label="Model Number"
            />
            <Field
              name={`${item}.model_name`}
              type="text"
              component={Input}
              label="Model Series Name"
            />
            <Field
              name={`${item}.product_color`}
              type="text"
              component={Dropdown}
              label="Primary Color"
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
              name={`${item}.storage_included`}
              type="text"
              component={Dropdown}
              label="Storage Included"
              options={{ yes: "Yes", no: "No" }}
            />
            <Field
              name={`${item}.with_mattress`}
              type="text"
              component={Dropdown}
              label="With Mattress"
              options={{ yes: "Yes", no: "No" }}
            />
            <Field
              name={`${item}.bed_size`}
              type="text"
              component={Dropdown}
              label="Bed Size"
              options={{ Queen: "Queen" }}
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

const FurnitureSection = ({
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
      const response = await fetch(`${apiUrl}/api/furniture-section/${id}`);
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
      const response = await fetch(`${apiUrl}/api/furniture-section`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, _id: id }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(id ? "Updated successfully" : "Created successfully");
        navigate("/furniture-section");
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
        {id ? "Edit Furniture Section" : "Create Furniture Section"}
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
            onClick={() => navigate("/furniture-section")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "furnitureSectionForm",
  validate,
})(FurnitureSection);
