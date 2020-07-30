import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyles from '../styles/global';

const ReviewDetails = ({navigation}) => {

    const onPress = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            <Button title="go back" onPress={onPress} />
        </View>
    )
}

export default ReviewDetails;

