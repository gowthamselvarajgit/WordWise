// components/SignUpForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUpForm = () => {
  return (
    <div className="p-10 bg-white w-full h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Let’s get started
      </h2>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          country: "India",
          state: "Tamil Nadu",
          phone: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success("Account Created Successfully!");
          resetForm();
        }}
      >
        <Form className="space-y-5 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Field
                name="firstName"
                placeholder="First Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <Field
                name="lastName"
                placeholder="Last Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <Field
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />

          <div className="grid grid-cols-2 gap-4">
            <Field
              as="select"
              name="country"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>India</option>
              <option>United States</option>
              <option>UK</option>
            </Field>
            <Field
              as="select"
              name="state"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Tamil Nadu</option>
              <option>Delhi</option>
              <option>Maharashtra</option>
            </Field>
          </div>

          <Field
            name="phone"
            placeholder="Phone Number"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="phone"
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
            GET STARTED
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
