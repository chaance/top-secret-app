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
import { FormValues, FormFieldProps } from './SignUpForm.d';
import { useFirebaseWithFormik } from '../../hooks';
import * as ROUTES from '../../routes';

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/@readybase\.com$/, { message: 'Not a valid ReadyBase email' })
    .required('Required'),
  password: Yup.string().required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
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

const SignUpForm: React.FC<any> = ({ redirectTo = ROUTES.HOME }) => {
  const handleSubmit = useFirebaseWithFormik('createUser', {
    onSuccess() {
      navigate(redirectTo);
    },
  });
  return (
    <div>
      <Formik
        validationSchema={SignUpSchema}
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
        onSubmit={handleSubmit}
        render={({ status = {} }: FormikProps<FormValues>) => {
          return (
            <Form>
              <FormField name="email" label="Email Address" htmlType="email" />
              <FormField name="password" label="Password" htmlType="password" />
              <FormField
                name="passwordConfirm"
                label="Verify Password"
                htmlType="password"
              />
              <button type="submit">Sign Up</button>
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

export default SignUpForm;
