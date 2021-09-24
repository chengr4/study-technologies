<Formik
  initialValues={{
    email: '',
    password: '',
    submit: false,
  }}
  validationSchema={Yup.object().shape({
    email: Yup.string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: Yup.string().max(255).required('Password is required'),
  })}
  onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      onLogin(values.email, values.password, () => {
        setStatus({ success: false });
        setErrors({ submit: 'Email or Password Incorrect!' });
      });
      //
    } catch (error) {
      const message = error.message || 'Something went wrong';
      setStatus({ success: false });
      setErrors({ submit: message });
      setSubmitting(false);
    }
  }}
>
  {({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
    values,
  }) => (
    <form noValidate onSubmit={handleSubmit}>
      {/* <Alert mt={3} mb={1} severity="info">
              Use <strong>achin178@gmail.com</strong> and{' password '}
                <strong>5566</strong> to sign in for test.
              </Alert> */}
      {errors.submit && (
        <Alert mt={2} mb={1} severity="warning">
          {errors.submit}
        </Alert>
      )}
      <TextField
        type="email"
        name="email"
        label="Email Address"
        value={values.email}
        error={Boolean(touched.email && errors.email)}
        fullWidth
        helperText={touched.email && errors.email}
        onBlur={handleBlur}
        onChange={handleChange}
        my={2}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        value={values.password}
        error={Boolean(touched.password && errors.password)}
        fullWidth
        helperText={touched.password && errors.password}
        onBlur={handleBlur}
        onChange={handleChange}
        my={2}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting}
      >
        {
          auth.loading ?
            <CircularProgress
              size='22px'
              color="secondary" /> : 'Sign in'
        }

      </Button>
      <Button
        component={Link}
        to="/auth/reset-password"
        fullWidth
        color="primary"
      >
        Forgot password
      </Button>
      <Button
        component={Link}
        to="/auth/sign-up"
        fullWidth
        color="primary"
      >
        Sign Up
      </Button>
    </form>
  )}
</Formik>