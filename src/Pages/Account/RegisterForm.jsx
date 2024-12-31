import React from "react";
import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "../../Component/Input";

const RegisterForm = ({ handleSubmit, pristine, submitting }) => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_ECOMMERCE_ADMIN_API}/api/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="name" type="text" component={Input} label="Name" />
        <Field name="email" type="email" component={Input} label="Email" />
        <Field
          name="password"
          type="password"
          component={Input}
          label="Password"
        />
        <Field
          name="confirmPassword"
          type="password"
          component={Input}
          label="Confirm Password"
        />
        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={pristine || submitting}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "registerForm",
})(RegisterForm);
