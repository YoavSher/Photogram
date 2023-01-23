import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
    image: string
}
export const PostImg = ({ image }: Props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom:10
    },
    image: {
        width: '100%',
        height: 450,
        marginTop: 10,
        // marginHorizontal:'120%'
    }
})