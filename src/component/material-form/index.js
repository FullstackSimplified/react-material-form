import { TextField, Button, Box, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

const initalValues = {
  email: "",
  name: "",
  password: "",
};

const MaterialForm = () => {
  return (
    <div className="MaterialForm">
      <Typography variant="h4">
        React Material From Using Formik and Yup
      </Typography>
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          name: string().required("Please enter name").min(2, "Name too short"),
          password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long"),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Field
              name={"email"}
              type={"email"}
              as={TextField}
              variant={"outlined"}
              color={"primary"}
              label={"Email"}
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />

            <Field
              name={"name"}
              type={"name"}
              as={TextField}
              variant={"outlined"}
              color={"primary"}
              label={"Name"}
              fullWidth
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />
            <Box height={14} />
            <Field
              name={"password"}
              type={"password"}
              as={TextField}
              variant={"outlined"}
              color={"primary"}
              label={"Password"}
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />

            <Button
              type={"submit"}
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MaterialForm;
