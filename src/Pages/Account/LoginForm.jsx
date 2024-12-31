import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../Component/Input";

const LoginForm = ({ handleSubmit }) => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_ECOMMERCE_ADMIN_API;
  const [loading, setLoading] = useState(false);

  const submitForm = async (values) => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success(data.message);
        navigate("/dashboard");
      } else {
        toast.error(data.error || data.message || "Login failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An unexpected error occurred");
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <Field name="email" type="email" component={Input} label="Email" />
        <Field
          name="password"
          type="password"
          component={Input}
          label="Password"
        />
        <div className="mt-4">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "loginForm",
})(LoginForm);
