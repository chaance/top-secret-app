import { FormikActions, FormikValues } from 'formik';
import {
  User,
  UserCredential,
  IdTokenResult,
  ConfirmationResult,
  Error as FirebaseError,
} from '@firebase/auth-types';
import { get as _get } from 'lodash';
import { useFirebase } from '../hooks';

const noop = () => {};

interface Args {
  onSuccess?(
    values: FormikValues,
    res?:
      | User
      | UserCredential
      | IdTokenResult
      | ConfirmationResult
      | void
      | string
      | object
  ): any;
  onError?(e: Error | FirebaseError): any;
}

function getFirebaseError(code: string, message: string): string {
  const defaultMessage =
    'An error occurred. Please check your form fields and try again later.';
  switch (code) {
    case 'auth/weak-password':
      message =
        'Your password is too weak. Try again with a stronger password.';
      break;
    case 'auth/email-already-in-use':
      message = 'An account is already set up using this email address.';
      break;
    case 'auth/invalid-email':
      message = 'Invalid email.';
      break;
    default:
      try {
        const messageObject = JSON.parse(message);
        message = messageObject.message || defaultMessage;
      } catch (e) {
        message = message || defaultMessage;
      }
      break;
  }
  return message;
}

function getFirebaseSuccessMessage(method: string): string {
  let message = 'Success!';
  switch (method) {
    case 'createUser':
      message = 'User created successfully. Redirecting you to Frontier.';
      break;
    case 'signIn':
      message = 'Sign in successful. Redirecting you to Frontier.';
      break;
    default:
      break;
  }
  return message;
}

export default (
  method: string,
  { onSuccess = noop, onError = noop }: Args = {}
) => {
  const firebase = useFirebase();
  const caller = _get(firebase, method);
  return function handleSubmit(
    values: FormikValues = {},
    actions?: FormikActions<any>
  ) {
    try {
      caller(values)
        .then((res: any) => {
          const message = getFirebaseSuccessMessage(method);
          onSuccess(values, res);
          if (actions) {
            actions.resetForm();
            actions.setStatus({ message, isError: false });
          }
        })
        .catch((err: FirebaseError) => {
          const { message: returnedMessage = '', code = '' } = err;
          const message = getFirebaseError(code, returnedMessage);
          if (actions) {
            actions.setStatus({ message, isError: true });
          }
          onError(err);
        });
    } catch (err) {
      onError(err);
    }
  };
};
