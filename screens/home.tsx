import { StyleSheet, Text, View } from "react-native"
import { AppFooter } from "../cmps/home-cmps/app-footer"
import { AppHeader } from "../cmps/home-cmps/app-header"
import { Stories } from "../cmps/home-cmps/stories"
import { Post } from "../cmps/post-cmps/post"
import { USERS } from "../services/user.data"


export const Home = ({navigation}:any) => {
    const loggedInUser = USERS[0]
    return (
        <View style={styles.homeContainer}>
            <AppHeader />
            <Stories />
            <Post />
            <AppFooter user={loggedInUser} />
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
})