import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import { Formik, Form, FormikProps } from 'formik';
import * as yup from 'yup';
import * as EmailValidator from 'email-validator';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigations-type';
import { auth, db } from '../../firebase.config';
import { utilService } from '../../services/utils.service';

const signupYup = yup.object().shape({
    username: yup.string().min(2).required('Please enter a username'),
    email: yup.string().email().required('Please enter a valid email address'),
    password: yup.string().min(8).required('Password has to be at least 8 characters')
})
interface Values {
    username: string,
    email: string,
    password: string,
}
export const SignupForm = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const onSignup = async (email: string, password: string, username: string) => {
        try {
            const user = await auth.createUserWithEmailAndPassword(email, password)
            // const res = await utilService.getRandProfilePic()
            // console.log('res', res);
            console.log('success!!', email, password);
            db.collection('users').add({
                _id: user.user?.uid,
                username,
                email,
                profilePic: await utilService.getRandProfilePic()
            })

        } catch (err) {
            Alert.alert('Failed to signup')
            console.log(err);
        }
    }
    return (
        <Formik initialValues={{
            username: '',
            email: '',
            password: ''
        }}
            onSubmit={(values) => { onSignup(values.email, values.password, values.username) }}
            validationSchema={signupYup}
            validateOnMount={true}>
            {({ handleChange, handleSubmit, values, errors, isValid }: FormikProps<Values>) => (
                <>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, {
                                borderColor: values.username.length < 1 ||
                                    values.username.length > 2 ?
                                    'black' : 'red'
                            }]}
                            placeholder='Enter username'
                            autoFocus
                            onChangeText={handleChange('username')}
                            value={values.username} />
                        <TextInput
                            style={[styles.input, {
                                borderColor: values.email.length < 1 ||
                                    EmailValidator.validate(values.email) ?
                                    'black' : 'red'
                            }]}
                            placeholder='Phone number, username or email'
                            keyboardType='email-address'
                            onChangeText={handleChange('email')}
                            value={values.email} />
                        <TextInput style={[styles.input, {
                            borderColor: values.password.length < 1 ||
                                values.password.length >= 8 ?
                                'black' : 'red'
                        }]}
                            placeholder='Password'
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            value={values.password} />
                    </View>

                    <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: '#3fa2f6' }}>Forgot password?</Text>
                    </TouchableOpacity>

                    <Pressable onPress={() => handleSubmit()}
                        style={validFormStyle(isValid).btn}
                        disabled={!isValid}>
                        <Text style={styles.btnTxt}>Sign up</Text>
                    </Pressable>

                    <View style={styles.signUpContainer}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigate('Login')}>
                            <Text style={{ color: '#3fa2f6' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </>

            )}
        </Formik>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center'
    },
    input: {
        width: 350,
        height: 40,
        padding: 8,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 3,
        backgroundColor: '#e1e1e1'
    },
    btnTxt: {
        color: 'white',
        fontSize: 20
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    }
})

const validFormStyle = (isActive: boolean) => StyleSheet.create({
    btn: {
        marginTop: 35,
        backgroundColor: isActive ? '#3fa2f6' : '#a3b9f9',
        borderRadius: 3,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})