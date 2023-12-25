import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25)
    .required("Please enter your name"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});
