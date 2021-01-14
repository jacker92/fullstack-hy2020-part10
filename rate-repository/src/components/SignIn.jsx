import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from './../hooks/useSignIn';
import { useHistory } from "react-router-native";

export const SignInContainer = ({ onSubmit }) => {

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(4, 'Username needs to be at least 4 characters')
            .required('Username is required'),
        password: yup
            .string()
            .min(5, 'Password must be at least 5 characters long')
            .required('Password is required'),
    });

    const initialValues = {
        username: '',
        password: ''
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

const SignIn = () => {
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            await signIn({ username, password });
            history.push('/');
            location.reload(); // TODO: change....
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <SignInContainer onSubmit={onSubmit} />
    );
};

export default SignIn;