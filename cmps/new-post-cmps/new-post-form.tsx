import { Formik, Form, FormikProps } from 'formik';
import { useState } from 'react';
import { Button, Image, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native'
import { Divider } from 'react-native-elements';
import * as yup from 'yup';
import validUrl from 'valid-url'
const defaultImage = 'https://www.sourcedogg.com/wp-content/uploads/2015/05/default-placeholder.png'


const uploadPostYup = yup.object().shape({
    imgUrl: yup.string().url().required('Please enter a valid url'),
    caption: yup.string().max(2200, 'You reached the limit')
})
interface Values {
    imgUrl: string,
    caption: string
}
export const NewPostForm = () => {
    const [imageUrl, setImageUrl] = useState(defaultImage)

    return (
        <View style={styles.container}>
            <Formik initialValues={{
                imgUrl: '',
                caption: ''
            }}
                onSubmit={(values) => { console.log('values:', values) }}
                validationSchema={uploadPostYup}
                validateOnMount={true}>
                {({ handleChange, handleSubmit, values, errors, isValid }: FormikProps<Values>) => (
                    <View >
                        <View style={styles.inputContainer}>
                            <Image source={{ uri: validUrl.isUri(imageUrl) ? imageUrl : defaultImage }}
                                style={styles.img} />
                            <TextInput
                                style={{ color: 'white' }}
                                placeholder='Write a caption...'
                                placeholderTextColor={'#ffffff75'}
                                onChangeText={handleChange('caption')}
                                value={values.caption} />
                        </View>
                        <Divider width={1} orientation={'vertical'} />
                        <TextInput
                            style={{ color: 'white' }}
                            placeholder='Enter a url'
                            placeholderTextColor={'#ffffff75'}
                            onChange={ev => setImageUrl(ev.nativeEvent.text)}
                            onChangeText={handleChange('imgUrl')}
                            value={values.imgUrl} />
                        {errors.imgUrl &&
                            <Text style={{ color: 'red' }}>{errors.imgUrl}</Text>
                        }
                        <Button onPress={() => handleSubmit()} title="Share" disabled={!isValid} />
                    </View>
                )}
            </Formik>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingHorizontal: 20
    },
    img: {
        height: 100,
        width: 100,
        marginEnd: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15
    }
})