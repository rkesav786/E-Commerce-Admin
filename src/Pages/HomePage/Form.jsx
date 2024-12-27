import React, { useEffect, useState } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validate } from "../../Validators/mobileSectionValidators";
import { Input } from "../../Component/Input";
import UploadImage from "../../Component/Upload";
import { Dropdown } from "../../Component/Dropdown";
// Inside MobileSection.jsx

const listCatagory = ({ fields }) => (
  <div className="mt-3">
    {fields.map((item, index) => (
      <div key={index} className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h6>Catagory #{index + 1}</h6>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => fields.remove(index)}
            >
              Remove
            </button>
          </div>
          <Field
            name={`${item}.catagory_image`}
            type="text"
            component={UploadImage}
            label="Catagory Image"
          />
          <Field
            name={`${item}.catagory_name`}
            type="text"
            component={Input}
            label="Catagory Name"
          />
        </div>
      </div>
    ))}
    <button
      type="button"
      className="btn btn-success btn-sm"
      onClick={() => fields.push({})}
    >
      Add Catagory
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
            name={`${item}.brand_img`}
            type="file"
            component={UploadImage}
            label="Image"
          />
          <Field
            name={`${item}.brand_name`}
            type="text"
            component={Input}
            label="Brand Name"
          />
          <Field
            name={`${item}.starting_from`}
            type="text"
            component={Input}
            label="Starting From"
          />
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

const HomePgaeForm = ({ handleSubmit, initialize, pristine, submitting }) => {
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
      const response = await fetch(`${apiUrl}/api/home-page/${id}`);
      const data = await response.json();

      if (data.success) {
        initialize(data.section);
        console.log("data :", data);
        console.log("section :", data.section);
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
      const response = await fetch(`${apiUrl}/api/home-page`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, _id: id }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(id ? "Updated successfully" : "Created successfully");
        navigate("/home-page");
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
        {id ? "Edit Home Page" : "Create Home Page"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldArray name="list_catagory" component={listCatagory} />
        <div className="d-flex justify-content-evenly">
          <div>
            <Field
              name="carousel_one"
              type="text"
              component={UploadImage}
              label="Carousel First"
            />
          </div>
          <div>
            <Field
              name="carousel_two"
              type="text"
              component={UploadImage}
              label="Carousel Second"
            />
          </div>
          <div>
            <Field
              name="carousel_three"
              type="text"
              component={UploadImage}
              label="Carousel Three"
            />
          </div>
        </div>

        <div className="border p-3 mb-3 mt-3">
          <h4>Mobile Catagory Items </h4>
          <FieldArray name="mobile_items" component={renderItems} />
        </div>
        <div className="border p-3 mb-3 mt-3">
          <h4>Furniture Catagory Items </h4>
          <FieldArray name="furniture_items" component={renderItems} />
        </div>
        <div className="border p-3 mb-3 mt-3">
          <h4>Fashion Catagory Items </h4>
          <FieldArray name="fashion_items" component={renderItems} />
        </div>
        <div className="border p-3 mb-3 mt-3">
          <h4>Appliance Catagory Items </h4>
          <FieldArray name="appliance_items" component={renderItems} />
        </div>
        <div className="border p-3 mb-3 mt-3">
          <h4>Grocery Catagory Items </h4>
          <FieldArray name="grocery_items" component={renderItems} />
        </div>
        <div className="border p-3 mb-3 mt-3">
          <h4>Electronics Catagory Items </h4>
          <FieldArray name="electronics_items" component={renderItems} />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            disabled={pristine || submitting}
          >
            {submitting ? "Saving..." : id ? "Update" : "Create"}
          </button>

          <button
            type="button"
            className="btn btn-secondary ms-2 mb-3"
            onClick={() => navigate("/home-page")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "homePageForm",
  validate,
})(HomePgaeForm);
