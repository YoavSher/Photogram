import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/navigations-type'

interface Props {
    image: string,
    username: string
}
export const PostHeader = ({ image, username }: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image style={styles.userImg} source={{ uri: image }} />
                <Text style={styles.userName}>
                    {username.length > 20 ? `${username.substring(0, 20)}...` : username}</Text>
            </View>
            <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={15} color="white" />
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderTopWidth: 1,
        // borderTopColor: 'grey',
        marginTop: 5,
        paddingHorizontal: 20
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    userImg: {
        height: 35,
        width: 35,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: 'orange',
        marginEnd: 5
    },
    userName: {
        color: 'white',
        fontWeight: '600'
    }
})