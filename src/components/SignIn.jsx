import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
const SignIn = () => {

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .length(6, 'Username needs to be at least six characters')
            .required('Username is required'),
        password: yup
            .string()
            .length(8, 'Password must be at least 8 characters long')
            .required('Password is required'),
    });

    const initialValues = {
        username: '',
        password: ''
    };
    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) =>
                <SignInForm
                    onSubmit={handleSubmit}
                />}
        </Formik>
    );
};

export default SignIn;