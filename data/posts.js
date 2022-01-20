import { USERS } from './users';

export const POSTS = [
    {
        imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/271292895_1111462289682842_672673377485718482_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=TSsQ6zFZi9oAX9eJ9nE&_nc_oc=AQn6Y3o0NcVc0tyhw-cYHzdNzI4j60GT3KnbGniAFhyo2Z42zy_xZlvG1xYEracSnJw&tn=-FCt_LVt8uzw5SV5&_nc_ht=scontent-atl3-1.xx&oh=00_AT-ngwv0pvDPoXSe7D_NLU5l9pylprfFlILxYFQZp8Jl2Q&oe=61EEBD23',
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
        imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/266715094_1097859414376463_5726942724049947060_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=q77nj_tHtFMAX-CXYzA&_nc_ht=scontent-atl3-1.xx&oh=00_AT8YJ_HtRgjEKVme5MNOt2gnB2uPyNxEBbQyoikxS-ZDyw&oe=61EE442A',
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
        imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/259607737_1085105528985185_1546999693304361660_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=6nansujQpTEAX9h2Gf1&_nc_ht=scontent-atl3-1.xx&oh=00_AT-o57Ge3PIx4LWEsKNfHdt7rR4mUJUKO8bibUiD-GJrFQ&oe=61EF75DF',
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