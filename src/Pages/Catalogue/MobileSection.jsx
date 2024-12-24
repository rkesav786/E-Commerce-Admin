import React from "react";
import { Field, reduxForm } from "redux-form";
import { CatalogueData } from "../../actions";
import { Input } from "../../Component/Input";

// const validate = (values) => {
//   const errors = {};
//   if (!values.heading) errors.heading = "Heading is required";
//   if (!values.sub_heading) errors.sub_heading = "Sub Heading is required";
//   if (!values.desc) errors.desc = "Description is required";
//   if (!values.desc_text) errors.desc_text = "Desc Text is required";
//   return errors;
// };

const MobileSection = ({ handleSubmit }) => {
  const onSubmit = (formValues) => {
    let section = "mobile-section";
    CatalogueData(formValues, section);
  };

  return (
    <div className="m-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border p-3 mb-4">
          <Field
            name="section_name"
            label="Section Name:"
            type="text"
            component={Input}
          />
        </div>
        <Field name="name" label="Name:" type="text" component={Input} />
        <Field
          name="description"
          label="Description:"
          type="text"
          component={Input}
        />
        <Field name="price" label="Price:" type="text" component={Input} />
        <Field
          name="offer_price"
          label="Offer Price:"
          type="text"
          component={Input}
        />
        <Field name="tag" label="Tag:" type="text" component={Input} />
        <Field name="image" label="Image:" type="text" component={Input} />
        <button className="btn btn-primary mt-3" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "mobileSectionForm",
  //   validate,
})(MobileSection);
