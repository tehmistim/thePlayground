import { USERS } from './users';

export const POSTS = [
    {
        imageUrl: 'https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/271292895_1111462289682842_672673377485718482_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=4z8WPK1dXjYAX8cGzKQ&_nc_oc=AQn4QTOX-wYcBFTJrQz_Sf3AN4lppOjBERhjY-lN_3N2oEcpf3wwC9_5eADZ6bZrh1s&_nc_ht=scontent-hou1-1.xx&oh=00_AT_rVhJqV3hHLM3rzrARWupY6blAJCtu8BVx4MhKMeYYHg&oe=62008963',
        user: USERS[0].user,
        likes: 440,
        caption: 'My brother never wants to sit still!  #huskylife #cantsitstill #hyper',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'waggybutt2',
                comment: 'I may have marked that earlier!'
            },
            {
                user: 'shelledlee',
                comment: 'I marked that yesterday!'
            },
        ],
    },
    {
        imageUrl: 'https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/266715094_1097859414376463_5726942724049947060_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sTzl38DqiyIAX-bJxnB&tn=WGha-EYEpPNvhO1n&_nc_ht=scontent-hou1-1.xx&oh=00_AT8dIt0aPAobefeUj1qCOFbiI_Qnc4JNTizF8sIgWsFaYA&oe=6200106A',
        user: USERS[2].user,
        likes: 210,
        caption: 'Can you believe we all have a twin, lol. #twizies',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'katiyashot',
                comment: 'I wonder if I have a twin?'
            },
            {
                user: 'Teracane',
                comment: 'There are too many of you silly guys to keep up with.'
            },
            {
                user: 'waggybutt2',
                comment: 'Double trouble!'
            },
            {
                user: 'mommabella',
                comment: 'My kids are so beautiful. 🥰🥰🥰 #proudmomma'
            },
        ],
    },
    {
        imageUrl: 'https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/262494965_1090357048460033_9007063197774193945_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=SHwsFaR1WNQAX_NZ1tA&_nc_ht=scontent-hou1-1.xx&oh=00_AT-WQbrPwNZtZA2rpPKYHvjxjsaWIs7qbSCs6ZEjx8vbLA&oe=62002E23',
        user: USERS[2].user,
        likes: 307,
        caption: 'I meeeean, we were cute babies!',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'beautow',
                comment: `OMG how could you post this, I'm embarrassed fr fr.`
            },
            {
                user: 'Teracane',
                comment: `Awww sha, y'all sooooooo cute!`
            },
            {
                user: 'mommabella',
                comment: '😍 I remember this photo! '
            },
        ],
    },
]