import { Alert, Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Formik, Form, FormikProps } from 'formik';
import * as yup from 'yup';
import * as EmailValidator from 'email-validator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigations-type';
import { auth } from '../../firebase.config';


const loginYup = yup.object().shape({
    email: yup.string().email().required('Please enter a valid email address'),
    password: yup.string().min(8).required('Password has to be at least 8 characters')
})
interface Values {
    email: string,
    password: string
}
export const LoginForm = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const onLogin = async (email: string, password: string) => {
        try {
            await auth.signInWithEmailAndPassword(email, password)
            console.log('success!!', email, password);

        } catch (err) {
            Alert.alert('Failed to login')
            console.log(err);
        }
    }
    return (

        <Formik initialValues={{
            email: '',
            password: ''
        }}
            onSubmit={(values) => { onLogin(values.email, values.password) }}
            validationSchema={loginYup}
            validateOnMount={true}>
            {({ handleChange, handleSubmit, values, errors, isValid }: FormikProps<Values>) => (
                <>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, {
                                borderColor: values.email.length < 1 ||
                                    EmailValidator.validate(values.email) ?
                                    'black' : 'red'
                            }]}
                            placeholder='Phone number, username or email'
                            keyboardType='email-address'
                            autoFocus
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
                        <Text style={styles.btnTxt}>Log In</Text>
                    </Pressable>

                    <View style={styles.signUpContainer}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigate('Signup')}>
                            <Text style={{ color: '#3fa2f6' }}>Sign up</Text>
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