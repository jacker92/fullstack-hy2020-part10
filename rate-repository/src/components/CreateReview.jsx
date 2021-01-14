import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import CreateReviewForm from './CreateReviewForm';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-native";

export const CreateReviewContainer = ({ onSubmit }) => {

    const validationSchema = yup.object().shape({
        owner: yup
            .string()
            .required('Username is required'),
        name: yup
            .string()
            .required('Password is required'),
        rating: yup
            .number()
            .min(0)
            .max(100)
            .required("Rating is required"),
        review: yup
            .string()
    });

    const initialValues = {
        owner: '',
        name: '',
        rating: '',
        review: ''
    };

    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) =>
                <CreateReviewForm
                    onSubmit={handleSubmit}
                />}
        </Formik>
    );
};

const CreateReview = () => {
    const [mutate] = useMutation(CREATE_REVIEW);
    const history = useHistory();

    const onSubmit = async (values) => {
        const { owner, name, rating, review } = values;
        try {
            const res = await mutate({
                variables: {
                    review:
                    {
                        repositoryName: name,
                        ownerName: owner,
                        rating: Number(rating),
                        text: review
                    }
                }
            });
            history.push(`/${res.data.createReview.repositoryId}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <CreateReviewContainer onSubmit={onSubmit} />
    );
};

export default CreateReview;