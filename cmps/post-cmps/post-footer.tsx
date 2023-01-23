import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

interface Props {
    user: string,
    likes: number,
    caption: string,
    comments: {
        user: string,
        comment: string
    }[]
}

export const PostFooter = ({ user, likes, caption, comments }: Props) => {
    const showLikes = () => {
        if (likes > 999) return likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return likes
    }
    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.iconsLeft}>
                    <TouchableOpacity style={styles.icon}>
                        <Feather name="heart" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <Feather name="message-circle" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <Feather name="send" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity >
                    <Feather name="bookmark" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.txt}>{showLikes()} likes</Text>
            <Text style={styles.captionContainer}>
                <Text style={styles.txt}>{user}</Text>
                <Text style={{ color: '#ffffffb8' }}> {caption}</Text>
            </Text>
            {comments && <View>
                <Text style={{ color: '#ffffff75', marginBottom: 5 }}>
                    View{comments.length > 1 ? ` all ${comments.length} comments` : ' comment'}</Text>
                {comments.map((c, idx) => {
                    return <Text key={idx}>
                        <Text style={styles.txt}>{c.user}</Text>
                        <Text style={{ color: '#ffffffb8' }}> {c.comment}</Text>
                    </Text>
                })}
            </View>}

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 10
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    iconsLeft: {
        flexDirection: 'row',
    },
    icon: {
        marginEnd: 10
    },
    txt: {
        color: 'white'
    },
    captionContainer: {
        marginBottom: 5
    }

})