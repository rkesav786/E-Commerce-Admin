import React, { useEffect } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { CatalogueData } from "../../actions";
import { Input } from "../../Component/Input";
import UploadImage from "../../Component/Upload";

const renderRepeater = ({ fields }) => (
  <div>
    {fields.map((item, index) => (
      <div className="m-3 p-3 border" key={index}>
        <h3>Catalogue {index + 1}</h3>
        <Field name={`${item}.name`} component={Input} label="Item Name" />
        <Field
          name={`${item}.description`}
          component={Input}
          label="Description"
        />
        <Field name={`${item}.price`} component={Input} label="Price" />
        <Field
          name={`${item}.offer_price`}
          component={Input}
          label="Offer Price"
        />
        <Field name={`${item}.tag`} component={Input} label="Tag" />
        <Field name={`${item}.image`} component={UploadImage} label="Image" />

        <button
          type="button"
          className="btn btn-secondary mt-2 btn-sm"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
      </div>
    ))}
    <button
      type="button"
      className="btn btn-success btn-sm ms-3 mt-2 mb-2"
      onClick={() => fields.push({})}
    >
      Add More
    </button>
  </div>
);

const FashionSection = ({ handleSubmit, initialize }) => {
  useEffect(() => {
    const savedData = localStorage.getItem("fashionSectionForm");
    if (savedData) {
      initialize(JSON.parse(savedData));
    }
  }, [initialize]);

  const onSubmit = (formValues) => {
    let section = "fashion-section";
    CatalogueData(formValues, section); // Assuming this is your action to send data to the backend
    localStorage.setItem("fashionSectionForm", JSON.stringify(formValues)); // Save to localStorage
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center mt-3">Fashion Section</h2>
      <div className="m-3">
        <Field name="section_name" component={Input} label="Section Name" />
      </div>
      <div>
        <FieldArray name="items" component={renderRepeater} />
      </div>

      <button type="submit" className="btn btn-success btn-sm ms-3 mt-1 mb-2">
        Save
      </button>
    </form>
  );
};

export default reduxForm({
  form: "fashionSectionForm",
})(FashionSection);
