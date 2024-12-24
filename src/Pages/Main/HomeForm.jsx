import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../Component/Input";
import { mainPageFormData } from "../../actions";
// const validate = (values) => {
//   const errors = {};
//   if (!values.heading) errors.heading = "Heading is required";
//   if (!values.sub_heading) errors.sub_heading = "Sub Heading is required";
//   if (!values.desc) errors.desc = "Description is required";
//   if (!values.desc_text) errors.desc_text = "Desc Text is required";
//   return errors;
// };

const HomeForm = ({ handleSubmit }) => {
  const onSubmit = (formValues) => {
    mainPageFormData(formValues);
  };

  return (
    <div className="m-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="thumb_image_title"
          label="Heading:"
          type="text"
          component={Input}
        />
        <Field
          name="thumb_image"
          label="Heading:"
          type="text"
          component={Input}
        />
        <Field
          name="carousel_image_1"
          label="Heading:"
          type="text"
          component={Input}
        />
        <Field
          name="carousel_image_3"
          label="Heading:"
          type="text"
          component={Input}
        />
        <Field
          name="carousel_image_2"
          label="Heading:"
          type="text"
          component={Input}
        />
        <Field
          name="product_brand_name"
          label="Heading:"
          type="text"
          component={Input}
        />
        <Field
          name="product_image"
          label="Heading:"
          type="text"
          component={Input}
        />
        <Field
          name="product_starting_from"
          label="Heading:"
          type="text"
          component={Input}
        />

        <Field
          name="thumb_image_title"
          label="Thumb Image Title"
          component={Input}
        />

        <button className="btn btn-primary mt-3" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "homeForm",
  // validate,
})(HomeForm);
