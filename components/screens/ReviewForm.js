import React from 'react';
import { TextInput, View, Button } from 'react-native';
import globalStyles from '../styles/global';
import { Formik } from 'formik';

const ReviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            style={globalStyles.formInput}
                            placeholder='Review title'
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        <TextInput
                            style={globalStyles.formInput}
                            multiline
                            placeholder='Review details'
                            onChangeText={handleChange('body')}
                            onBlur={handleBlur('body')}
                            value={values.body}
                        />
                        <TextInput 
                            keyboardType='numeric'
                            style={globalStyles.formInput}
                            placeholder='Rating (1 - 5)'
                            onChangeText={handleChange('rating')}
                            onBlur={handleBlur('rating')}
                            value={values.rating}
                        />
                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm;

