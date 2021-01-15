import React from 'react';
import Text from './Text';
import { TouchableWithoutFeedback, View } from 'react-native';

const Button = ({ onClick, buttonText, style }) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={style.buttonStyle}>
                <Text style={style.buttonTextStyle}>{buttonText}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Button;