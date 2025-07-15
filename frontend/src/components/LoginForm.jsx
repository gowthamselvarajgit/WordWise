import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 bg-white w-full h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await axios.post("/login", {
              email: values.email,
              password: values.password,
            });

            toast.success("Login Successful");
            resetForm();
            navigate("/word-counter");
          } catch (err) {
            let message = "Login failed. Please try again.";

            if (err.response?.data) {
              message =
                typeof err.response.data === "string"
                  ? err.response.data
                  : err.response.data.message ||
                    JSON.stringify(err.response.data.message || {});
            }

            toast.error(message);
          }
        }}
      >
        <Form className="space-y-5 mt-6">
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm mt-1"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-lg text-white font-semibold transition"
          >
            LOGIN
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
