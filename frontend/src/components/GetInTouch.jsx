import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";

const GetInTouch = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Please enter your message"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted: ", values);
    toast.success("We Will Contact you soon!");
    resetForm();
  };

  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-lg w-full max-w-lg">
      <h4 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h4>
      <p className="text-sm text-gray-500 mb-6">You can reach us anytime</p>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <Field
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-xs text-rose-500"
              />
            </div>
            <div className="w-1/2">
              <Field
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-xs text-rose-500"
              />
            </div>
          </div>

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-xs text-red-500"
          />

          <Field
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-xs text-red-500"
          />

          <Field
            name="message"
            as="textarea"
            rows="3"
            placeholder="How can we help?"
            className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-xs text-red-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>

          <p className="text-xs text-gray-400 text-center mt-2">
            By contacting us, you agree to our{" "}
            <span className="underline">Terms of Service</span> and{" "}
            <span className="underline">Privacy Policy</span>.
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default GetInTouch;
