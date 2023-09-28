import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("*This is not a valid Awayday email"),
});
