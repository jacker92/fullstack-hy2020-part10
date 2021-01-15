import React from 'react';
import { View } from 'react-native';
import SubmitButton from './SubmitButton';
import FormikTextInput from './FormikTextInput';

const CreateReviewForm = ({ onSubmit }) => {
    const style = {
        textField: {
            height: 60,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 20,
            padding: 15
        }
    };

    return (
        <View>
            <FormikTextInput name="owner" placeholder="Repository owner name" style={style.textField} />
            <FormikTextInput name="name" placeholder="Repository name" style={style.textField} />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" style={style.textField} />
            <FormikTextInput name="review" placeholder="Review" style={style.textField} />
            <SubmitButton onSubmit={onSubmit} buttonText="Create a review" />
        </View>
    );
};

export default CreateReviewForm;