import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/global';

const Home = ({navigation}) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Super Mario', rating: 4, body: 'lorem ipsum', key: '2'},
        { title: 'Luigi Cart', rating: 3, body: 'lorem ipsum', key: '3'},
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Home;

