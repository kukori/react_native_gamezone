import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyles from '../styles/global';

const Home = ({navigation}) => {

    const onPress = () => {
        navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Home Screen</Text>
            <Button title="go to review" onPress={onPress} />
        </View>
    )
}

export default Home;

