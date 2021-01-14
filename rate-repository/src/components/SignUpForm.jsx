import React from 'react';
import { View } from 'react-native';

import Button from './Button';

import FormikTextInput from './FormikTextInput';

const SignUpForm = ({ onSubmit }) => {
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
            <FormikTextInput name="passwordConfirmation" placeholder="Password again" style={style.textField} secureTextEntry={true} />
            <Button onSubmit={onSubmit} buttonText="Sign up" />
        </View>
    );
};

export default SignUpForm;