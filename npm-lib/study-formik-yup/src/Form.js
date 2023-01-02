import React from "react";
import { Formik } from "formik";
import * as yup from 'yup';

const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email('Must be a valid email'),
  password: yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(255),
  confirmPassword: yup.string().when('password', {
    is: (val) => (val && val.length > 0 ? true : false),
    // "then" provides the true schema
    then: yup.string().oneOf(
      [yup.ref('password')],
      'Both password need to be the same',
    ),
  }),
});

function Form() {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(formikProps) => (
          <>
            <input
              type="text"
              value={formikProps.values.first_name}
              onChange={formikProps.handleChange('first_name')}
            />

            <input
              type="text"
              value={formikProps.values.last_name}
              onChange={formikProps.handleChange('last_name')}
            />
            <button type="submit" onClick={formikProps.handleSubmit}>Submit</button>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default Form;