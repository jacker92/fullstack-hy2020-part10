import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import Text from './Text';

import TextInput from './TextInput';
import theme from '../theme';

const styles = StyleSheet.create({
    errorText: {
        marginLeft: 21,
        color: theme.colors.errorColor
    },
});

const FormikTextInput = ({ name, style, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                style={style}
                name={name}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;