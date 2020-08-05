import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Card from '../shared/Card';
import globalStyles, {images} from '../styles/global';

const ReviewDetails = ({navigation}) => {

    const onPress = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Rating: </Text>
                    <Image source={images.ratings[navigation.getParam('rating')]} />
                </View>
            </Card>
            <Button title="go back" onPress={onPress} />
        </View>
    )
}


const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
});


export default ReviewDetails;

