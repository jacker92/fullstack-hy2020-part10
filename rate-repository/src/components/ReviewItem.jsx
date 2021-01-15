import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { textStyles } from '../theme';
import { dateToFinnishFormat } from '../utils/dateConverter';
import ReviewCircle from './ReviewCircle';

const ReviewItem = ({ review, title }) => {

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

    const reviewItemTitle = title ? title : review.user.username;
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexContainer}>
                <ReviewCircle rating={review.rating} />
            </View>
            <View style={styles.flexItemInfo}>
                <Text testID="reviewItemUserName" style={textStyles.header}>{reviewItemTitle}</Text>
                <Text testID="reviewItemCreateDate" style={textStyles.infoItem}>{dateToFinnishFormat(review.createdAt)}</Text>
                <Text testID="reviewItemText" style={textStyles.infoItem}>{review.text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;