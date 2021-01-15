import { View, Text, StyleSheet, Alert } from 'react-native';
import React from 'react';
import { textStyles } from '../theme';
import { dateToFinnishFormat } from '../utils/dateConverter';
import ReviewCircle from './ReviewCircle';
import Button from './Button';
import theme from './../theme';
import * as Linking from 'expo-linking';
import { DELETE_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';

const ReviewItem = ({ review, title, inPersonalView, refetch }) => {

    const [mutate] = useMutation(DELETE_REVIEW);

    const onDelete = async () => {
        try {
            await mutate({
                variables: {
                    id: review.id
                }
            });
        } catch (e) {
            console.log(e);
        }
        refetch();
    };

    const onClickViewRepository = () => {
        Linking.openURL(review.repository.url);
    };

    const onClickRemoveReview = () => {
        Alert.alert(
            "Remove review",
            "Are you sure you want to remove this review?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Remove", onPress: () => onDelete() }
            ],
            { cancelable: false }
        );
    };

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
        <>
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
            {inPersonalView ? <ReviewItemActionButtons
                onClickViewRepository={onClickViewRepository}
                onClickRemoveReview={onClickRemoveReview}
            /> : undefined}
        </>
    );

};

const ReviewItemActionButtons = ({ onClickViewRepository, onClickRemoveReview }) => {
    const styles = {
        flexContainer: {
            flexDirection: 'row'
        },
        buttonStyle: {
            flexGrow: 1,
            margin: 20,
            borderRadius: 5,
            padding: 20,
            height: 60,
            backgroundColor: theme.colors.buttonPrimary,
        },
        buttonTextStyle: {
            color: "white",
            textAlign: 'center'
        },
    };

    const redButtonStyle = {
        buttonStyle: {
            ...styles.buttonStyle,
            backgroundColor: 'red',
        },
        buttonTextStyle: styles.buttonTextStyle
    };
    return (
        <View style={styles.flexContainer}>
            <Button style={styles} buttonText="View repository" onClick={() => onClickViewRepository()} />
            <Button style={redButtonStyle} buttonText="Delete review" onClick={() => onClickRemoveReview()} />
        </View>
    );
};

export default ReviewItem;