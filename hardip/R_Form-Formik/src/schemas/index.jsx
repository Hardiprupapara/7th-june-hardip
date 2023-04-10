import * as Yup from 'yup'


export const signUPschema = Yup.object({
    name: Yup.string().min(2).max(25).required("plz enter your name"),
    email: Yup.string().email().required("plz enter your email"),
    city: Yup.string().required("plz enter your City name"),
    DOB: Yup.string().required("plz enter your City name"),
    password: Yup.string().min(6).required("plz enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null, "match password"])

})