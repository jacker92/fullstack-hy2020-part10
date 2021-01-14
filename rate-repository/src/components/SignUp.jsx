import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from './../hooks/useSignIn';
import { useHistory } from "react-router-native";
import SignUpForm from './SignUpForm';
import { CREATE_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';

export const SignUpContainer = ({ onSubmit }) => {

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(1, 'Username needs to be at least 1 characters')
            .max(30, 'Username maximum length is 30 characters')
            .required('Username is required'),
        password: yup
            .string()
            .min(5, 'Password must be at least 5 characters long')
            .max(50, 'Password maximum length is 50 caracters')
            .required('Password is required'),
        passwordConfirmation: yup
            .string()
            .oneOf([yup.ref('password'), null], "Passwords do not match")
            .required('Password confirm is required')
    });

    const initialValues = {
        username: '',
        password: '',
        passwordConfirmation: ''
    };

    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) =>
                <SignUpForm
                    onSubmit={handleSubmit}
                />}
        </Formik>
    );
};

const SignUp = () => {
    const [signIn] = useSignIn();
    const history = useHistory();
    const [mutate] = useMutation(CREATE_USER);

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            await mutate({
                variables: {
                    user:
                    {
                        username,
                        password
                    }
                }
            });
            await signIn({ username, password });
            history.push('/');
            location.reload(); // TODO: change....
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <SignUpContainer onSubmit={onSubmit} />
    );
};

export default SignUp;