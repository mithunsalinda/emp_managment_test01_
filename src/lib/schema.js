import * as yup from "yup";
export const emailFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    email2: yup.string().oneOf([yup.ref("email"), null], "Your Email dont match").required("Required"),
});


const phoneRegExp = /^\+65(6|8|9)\d{7}$/


export const nameFormSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("Required")
        .min(7, "Minumum 6 characters are required")
        .max(10, "Should be less than 10 characters"),
    lastName: yup
        .string()
        .required("Required")
        .min(7, "Minumum 6 characters are required")
        .max(10, "Should be less than 10 characters"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    gender: yup.string().required("Required")
});