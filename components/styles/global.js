import { StyleSheet } from 'react-native';

export default globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontFamily: 'PressStart2P_400Regular',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    formInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        color: '#333',
        borderRadius: 6,
        marginVertical: 5,
    },
    errorMessage: {
        color: 'maroon',
        fontFamily: 'PressStart2P_400Regular',
        fontSize: 10,
    }
});

export const images = {
    ratings: {
        '1': require('../../assets/rating-1.png'),
        '2': require('../../assets/rating-2.png'),
        '3': require('../../assets/rating-3.png'),
        '4': require('../../assets/rating-4.png'),
        '5': require('../../assets/rating-5.png'),
    }
};