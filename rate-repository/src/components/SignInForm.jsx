import React from 'react';
import { View } from 'react-native';

import SubmitButton from './SubmitButton';

import FormikTextInput from './FormikTextInput';

const SignInForm = ({ onSubmit }) => {
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
            <FormikTextInput name="username" placeholder="Username" style={style.textField} />
            <FormikTextInput name="password" placeholder="Password" style={style.textField} secureTextEntry={true} />
            <SubmitButton onSubmit={onSubmit} buttonText="Sign in" />
        </View>
    );
};

export default SignInForm;