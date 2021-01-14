import React from 'react';
import Text from './Text';
import { TouchableWithoutFeedback, View } from 'react-native';
import theme from '../theme';

const Button = ({ onSubmit, buttonText }) => {
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
    };
    return (
        <TouchableWithoutFeedback testID="submitButton" onPress={onSubmit}>
            <View style={style.buttonStyle}>
                <Text style={style.buttonTextStyle}>{buttonText}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Button;