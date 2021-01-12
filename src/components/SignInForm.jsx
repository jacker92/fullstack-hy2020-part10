import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';

const SignInForm = ({ onSubmit }) => {
    const style = {
        buttonStyle: {
            backgroundColor: theme.colors.buttonPrimary,
            margin: 20,
            borderRadius: 5,
            padding: 20,
            height: 60
        },
        buttonTextStyle: {
            color: "white",
            textAlign: 'center'
        },
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

            <TouchableWithoutFeedback onPress={onSubmit}>
                <View style={style.buttonStyle}>
                    <Text style={style.buttonTextStyle}>Sign in</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SignInForm;