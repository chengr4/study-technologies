import React from "react";
import { Formik } from "formik";

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
          submit: false,
        }}
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