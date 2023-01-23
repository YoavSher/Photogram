import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { USERS } from '../../services/user.data'

export const Stories = () => {
    const { users } = useGetStories()
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {users.map(s => {
                    return <View key={s.id} style={styles.userContainer}>
                        <Image source={{ uri: s.image }} style={styles.userImg} />
                        <Text style={styles.userTxt} numberOfLines={1}>
                            {s.name.length > 9 ? `${s.name.substring(0, 9)}...` : s.name}</Text>
                    </View>
                })}
            </ScrollView>
        </View>
    )
}

interface User {
    id: number,
    name: string,
    image: string
}
const useGetStories = () => {
    useEffect(() => {
        getUsers()
    }, [])
    const [users, setUsers] = useState<User[]>([])
    const getUsers = () => {
        const users = USERS
        setUsers(users)
    }
    return { users }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        paddingHorizontal:20
    },
    userContainer: {
        marginEnd: 5,
        alignItems: 'center',
    },
    userImg: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: 'orange',
        // borderStyle: 'solid'
    },
    userTxt: {
        color: 'white',

    }
})

