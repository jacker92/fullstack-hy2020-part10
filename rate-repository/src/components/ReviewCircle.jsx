import { View, Text } from 'react-native';
import React from 'react';

const ReviewCircle = ({ rating }) => {
    const circle = {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        borderWidth: 1,
        borderColor: 'blue',
        marginRight: 10
    };

    const text = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'blue',
        height: 40
    };

    return (
        <View style={circle}>
            <Text style={text}>{rating}</Text>
        </View>);
};

export default ReviewCircle;