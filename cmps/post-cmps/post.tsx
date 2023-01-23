import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { Divider } from "react-native-elements"
import { PostHeader } from './post-header'
import { PostImg } from './post-img'
import { PostFooter } from './post-footer'
import { POST } from '../../services/posts.data'

export const Post = () => {
    const { posts } = useGetPosts()
    return (
        <View style={styles.container}>
            <ScrollView style={{ height: '100%' }}>
                {posts.map((p, idx) => {
                    return <View key={idx}>
                        <Divider style={styles.divider} orientation="horizontal" width={1} />
                        <PostHeader image={p.profilePicture} username={p.user} />
                        <PostImg image={p.image} />
                        <PostFooter user={p.user} likes={p.likes} caption={p.caption}
                            comments={p.comments} />
                    </View>
                })}
            </ScrollView>
        </View>
    )
}

interface Post {
    image: string,
    user: string,
    likes: number,
    caption: string,
    profilePicture: string,
    comments: { user: string, comment: string }[]
}
const useGetPosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        getPosts()
    }, [])
    const getPosts = () => {
        const posts = POST
        setPosts(posts)
    }
    return { posts }
}

const styles = StyleSheet.create({
    container: {
        // marginBottom: 20
        flex: 1
    },
    divider: {
        marginTop: 5,
    }
})