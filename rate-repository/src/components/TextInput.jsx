/* eslint-disable no-unused-vars */
import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style];

    return <NativeTextInput testID={`${props.name}Field`} style={textInputStyle} {...props} />;
};

export default TextInput;