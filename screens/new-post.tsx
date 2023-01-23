import { StyleSheet, Text, View } from 'react-native'
import { NewPostForm } from '../cmps/new-post-cmps/new-post-form'
import { NewPostHeader } from '../cmps/new-post-cmps/new-post-header'


export const NewPost = () => {
    return (
        <View style={styles.container}>
            <NewPostHeader />
            <NewPostForm />
            {/* <Text>new-post</Text> */}
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1
    }
})