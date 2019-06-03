import React from 'react';
import {
  Formik,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { navigate } from '@reach/router';
import cx from 'classnames';
import { FormValues, FormFieldProps } from './SignInForm.d';
import { useFirebaseWithFormik } from '../../hooks';
import * as ROUTES from '../../routes';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Required'),
});

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  htmlType = 'text',
}) => {
  return (
    <Field
      name={name}
      render={({ field, form }: FieldProps<any>) => (
        <div>
          <label>
            <input type={htmlType} {...field} placeholder={label} />
          </label>
          {form.errors[name] && (
            <div className="error">
              <ErrorMessage className="error" name={name} />
            </div>
          )}
        </div>
      )}
    />
  );
};

const SignInForm: React.FC<any> = ({ redirectTo = ROUTES.HOME }) => {
  const handleSubmit = useFirebaseWithFormik('signIn', {
    onSuccess() {
      navigate(redirectTo);
    },
  });
  return (
    <div>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        render={({ status = {} }: FormikProps<FormValues>) => {
          return (
            <Form>
              <FormField name="email" label="Email Address" htmlType="email" />
              <FormField name="password" label="Password" htmlType="password" />
              <button type="submit">Sign In</button>
              {status.message && (
                <div className={cx('status', { error: status.isError })}>
                  {status.message}
                </div>
              )}
            </Form>
          );
        }}
      />
    </div>
  );
};

export default SignInForm;
