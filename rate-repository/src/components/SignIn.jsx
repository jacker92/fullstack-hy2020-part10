import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from './../hooks/useSignIn';
const SignIn = () => {

    const [signIn] = useSignIn();

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .length(4, 'Username needs to be at least six characters')
            .required('Username is required'),
        password: yup
            .string()
            .length(5, 'Password must be at least 8 characters long')
            .required('Password is required'),
    });

    const initialValues = {
        username: '',
        password: ''
    };
    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            const { data } = await signIn({ username, password });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
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