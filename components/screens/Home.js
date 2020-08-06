import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/Card';
import globalStyles from '../styles/global';

const Home = ({navigation}) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Super Mario', rating: 4, body: 'lorem ipsum', key: '2'},
        { title: 'Luigi Cart', rating: 3, body: 'lorem ipsum', key: '3'},
    ]);
    const [modalOpen, setModalOpen] = useState(false); 

    return (
        <View style={globalStyles.container}>
            <Modal style={styles.modalContent} visible={modalOpen} animationType='slide'>
                <View>
                    <MaterialIcons name='close' size={24} onPress={() => setModalOpen(false)} style={{...styles.modalToggle, ...styles.modalClose }} />
                    <Text>eee</Text>
                </View>
            </Modal>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.title}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <MaterialIcons name='add' size={24} onPress={() => setModalOpen(true)} style={styles.modalToggle} />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        borderWidth: 1,
        borderRadius: 10,
        borderTopColor: '#f2f2f2',
        padding: 5,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        alignSelf: 'flex-end',
        borderWidth: 0
    },
    modalContent: {
        flex: 1
    }
});

export default Home;

