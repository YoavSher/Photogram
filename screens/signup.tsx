import { Image, StyleSheet, Text, View } from 'react-native'
import { SignupForm } from '../cmps/signup-cmps/signup-form'

export const Signup = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img}
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3621/3621435.png' }} />
            </View>
            <SignupForm />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 30,
        backgroundColor: '#ededed'
    },
    imgContainer: {
        alignItems: 'center',
        marginVertical: 30
    },
    img: {
        height: 150,
        width: 150
    }
})