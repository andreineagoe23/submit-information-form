import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SubmitForm.css'; 

const SubmitForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic
  };

  return (
    <div className="container"> {/* Apply the .container style */}
      <h1>Submit Information</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" /> {/* Apply the .error style */}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" /> {/* Apply the .error style */}
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" /> {/* Apply the .error style */}
          </div>
          <div>
            <button type="submit" className="button">Submit</button> {/* Apply the .button style */}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SubmitForm;
