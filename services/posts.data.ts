import { USERS } from "./user.data";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 8,
        min: 4
    }
})

export const POST = [
    {
        image: 'https://cdn.pixabay.com/photo/2022/10/27/07/13/wedding-7550227_960_720.jpg',
        user: USERS[0].name,
        likes: 123,
        caption: lorem.generateWords(12),
        profilePicture: USERS[0].image,
        comments: [
            {
                user: lorem.generateWords(1),
                comment: lorem.generateWords(8)
            },
            {
                user: lorem.generateWords(1),
                comment: lorem.generateWords(8)
            },
        ],
    },
    {
        image: 'https://cdn.pixabay.com/photo/2023/01/03/19/22/bird-7695209_960_720.jpg',
        user: USERS[1].name,
        likes: 123,
        caption: lorem.generateWords(6),
        profilePicture: USERS[1].image,
        comments: [
            {
                user: lorem.generateWords(1),
                comment: lorem.generateWords(8)
            },
            {
                user: lorem.generateWords(1),
                comment: lorem.generateWords(8)
            },
        ],


    },
    {
        image: 'https://cdn.pixabay.com/photo/2022/12/28/21/10/night-7683839_960_720.jpg',
        user: USERS[2].name,
        likes: 123223423,
        caption: lorem.generateWords(6),
        profilePicture: USERS[2].image,
        comments: [
            {
                user: lorem.generateWords(1),
                comment: lorem.generateWords(8)
            },
            {
                user: lorem.generateWords(1),
                comment: lorem.generateWords(8)
            },
        ],


    },
    {
        image: 'https://cdn.pixabay.com/photo/2022/12/20/11/17/hiking-7667621_960_720.jpg',
        user: USERS[3].name,
        likes: 123,
        caption: lorem.generateWords(6),
        profilePicture: USERS[3].image,
        comments: [
            {
                user: lorem.generateWords(1),
                comment: lorem.generateWords(8)
            },
            {
                user: lorem.generateWords(1),
                comment: lorem.generateWords(8)
            },
        ],
    },
]