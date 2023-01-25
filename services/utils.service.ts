import axios from "axios"

export const utilService = {
    getRandProfilePic
}

async function getRandProfilePic() {
    try {
        const res = await axios.get('https://randomuser.me/api')
        const pic = res.data.results[0].picture.large
        return pic
    } catch (err) {
        throw err
    }
}