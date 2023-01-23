import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const LoginForm = () => {
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder='Phone number, username or email'
                    keyboardType='email-address'
                    autoFocus />
                <TextInput style={styles.input}
                    placeholder='Password'
                    secureTextEntry />
            </View>
            <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: '#3fa2f6' }}>Forgot password?</Text>
            </TouchableOpacity>
            <Pressable style={styles.btn}>
                <Text style={styles.btnTxt}>Log In</Text>
            </Pressable>
            <View style={styles.signUpContainer}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#3fa2f6' }}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </>
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
        borderRadius: 3
    },
    btn: {
        marginTop: 35,
        backgroundColor: '#3fa2f6',
        borderRadius: 3,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
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