import React from "react";
import { Field, reduxForm } from "redux-form";
import { mainPageFormData } from "../../actions";
import { Input } from "../../Component/Input";
import { Textarea } from "../../Component/TextArea";

const validate = (values) => {
  const errors = {};
  if (!values.heading) errors.heading = "Heading is required";
  if (!values.sub_heading) errors.sub_heading = "Sub Heading is required";
  if (!values.desc) errors.desc = "Description is required";
  if (!values.desc_text) errors.desc_text = "Desc Text is required";
  return errors;
};

const MainForm = ({ handleSubmit }) => {
  const onSubmit = (formValues) => {
    mainPageFormData(formValues);
  };

  return (
    <div className="m-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="heading" label="Heading:" type="text" component={Input} />
        <Field
          name="sub_heading"
          label="Sub Heading:"
          type="text"
          component={Input}
        />
        <Field name="desc" label="Description:" type="text" component={Input} />
        <Field name="desc_text" label="Desc Text:" component={Textarea} />
        <button className="btn btn-primary mt-3" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "mainForm",
  validate,
})(MainForm);
