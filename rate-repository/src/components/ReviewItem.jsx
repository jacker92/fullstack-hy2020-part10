import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { textStyles } from '../theme';
import { dateToFinnishFormat } from '../utils/dateConverter';

const ReviewItem = ({ review }) => {

    const styles = StyleSheet.create({
        flexContainer: {
            flexDirection: 'row',
            padding: 5
        },
        flexItemInfo: {
            flexDirection: 'column',
            alignItems: "flex-start",
            width: "87%"
        },
        rating: {
            width: 66,
            height: 66,
            marginRight: 5,
            borderRadius: 66 / 2
        }
    });

    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexContainer}>
                <ReviewCircle rating={review.rating} />
            </View>
            <View style={styles.flexItemInfo}>
                <Text testID="reviewItemUserName" style={textStyles.header}>{review.user.username}</Text>
                <Text testID="reviewItemCreateDate" style={textStyles.infoItem}>{dateToFinnishFormat(review.createdAt)}</Text>
                <Text testID="reviewItemText" style={textStyles.infoItem}>{review.text}</Text>
            </View>
        </View>
    );
};

const ReviewCircle = ({ rating }) => {
    const circle = {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        borderWidth: 1,
        borderColor: 'blue'
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

export default ReviewItem;