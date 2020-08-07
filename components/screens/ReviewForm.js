import React from 'react';
import { TextInput, View, Text } from 'react-native';
import globalStyles from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../shared/Button';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        }),
});

const ReviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <TextInput
                            style={globalStyles.formInput}
                            placeholder='Review title'
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        {errors.title && touched.title && <Text style={globalStyles.errorMessage}>{errors.title}</Text>}
                        <TextInput
                            style={globalStyles.formInput}
                            multiline
                            placeholder='Review details'
                            onChangeText={handleChange('body')}
                            onBlur={handleBlur('body')}
                            value={values.body}
                        />
                        {errors.body && touched.body && <Text style={globalStyles.errorMessage}>{errors.body}</Text>}
                        <TextInput 
                            keyboardType='numeric'
                            style={globalStyles.formInput}
                            placeholder='Rating (1 - 5)'
                            onChangeText={handleChange('rating')}
                            onBlur={handleBlur('rating')}
                            value={values.rating}
                        />
                        {errors.rating && touched.rating && <Text style={globalStyles.errorMessage}>{errors.rating}</Text>}
                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm;

