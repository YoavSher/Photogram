import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { Foundation, Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigations-type';

interface Props {
    user: {
        id: number,
        name: string,
        image: string
    }
}
export const AppFooter = ({ user }: Props) => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const [isActive, setIsActive] = useState('Home')
    const GoToScreen = (screen: string) => {
        setIsActive(screen)
        navigate(screen as never)
    }
    return (
        <>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => GoToScreen('Home')}>
                    <Foundation name="home" size={24} color="white"
                        style={{ opacity: isActive === 'Home' ? 100 : 0.6 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsActive('search')}>
                    <Ionicons name="search-outline" size={24} color="white"
                        style={{ opacity: isActive === 'search' ? 100 : 0.6 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsActive('video')}>
                    <MaterialCommunityIcons name="movie-play-outline" size={24} color="white"
                        style={{ opacity: isActive === 'video' ? 100 : 0.6 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsActive('bag')}>
                    <Feather name="shopping-bag" size={24} color="white"
                        style={{ opacity: isActive === 'bag' ? 100 : 0.6 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsActive('profile')}>
                    <Image source={{ uri: user.image }}
                        style={[styles.img, isActive === 'profile' ? styles.imgActive : null]} />
                </TouchableOpacity>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
        height: 50

    },
    img: {
        height: 35,
        width: 35,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'orange',
        opacity: 0.6
    },
    imgActive: {
        borderWidth: 3,
        opacity: 100
    }
})