import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigations-type";



export const AppHeader = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    useEffect(() => {
        fontsLoaded
    }, [])
    const [fontsLoaded] = useFonts({
        'Billabong': require('../../assets/fonts/Billabong.ttf'),
    })
    if (!fontsLoaded) return null
    const onGoToNewPost = () => {
        navigate('NewPost')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.logo}>Photogram</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.icon} onPress={onGoToNewPost}>
                    <AntDesign name="plussquareo" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Feather name="heart" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <View style={styles.unReadMsgs}>
                        <Text style={styles.unReadMsgsTxt}>11</Text>
                    </View>
                    <MaterialCommunityIcons name="facebook-messenger" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    logo: {
        fontFamily: 'Billabong',
        color: 'white',
        fontSize: 25
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 5
    },
    unReadMsgs: {
        backgroundColor: '#ee4040',
        height: 16,
        width: 25,
        borderRadius: 20,
        position: 'absolute',
        bottom: 15,
        left: 10,
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unReadMsgsTxt: {
        color: 'white',
        fontWeight: '600',
        position: 'relative',
        bottom: 2
    }
})
