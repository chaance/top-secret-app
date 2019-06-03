export interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface FormFieldProps {
  name: string;
  label: string;
  htmlType?: string;
}
