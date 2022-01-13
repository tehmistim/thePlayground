import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/ios/100/ffffff/dog-paw-print.png',
        likedImageUrl: 'https://img.icons8.com/color/48/000000/dog-paw-print.png'
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-comment-chat-flatart-icons-outline-flatarticons-1.png'
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/material-outlined/48/ffffff/share.png'
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/material-outlined/48/ffffff/bookmark-ribbon--v1.png'
    },
]

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{
                marginHorizontal: 15, 
                marginTop: 10,
            }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    }}>
        <View style={{flexDirection: 'row', 
        alignItems: 'center',
        }}>
            <Image 
                source={{uri: post.profile_picture}} 
                style={styles.story}
            />
            <Text style ={{
                color: 'white',
                marginLeft: 5,
                fontWeight: '700',
            }}>
                {post.user}
            </Text>
        </View>
        <Text style={{ 
            color: 'white', 
            fontWeight: '900' ,
        }}>...</Text>
    </View>
)

const PostImage = ({ post }) => (
    //() in an arrow function is an implicit return'
    <View style={{
        width: '100',
        height: 450,
    }}>
        <Image 
            source={{uri: post.imageUrl}} 
            style={{
                height: '100%', 
                resizeMode: 'cover',
            }}
        />
    </View>
)

const PostFooter = () => (
    <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-between',
    }}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon 
                imgStyle={styles.likeIcon} 
                imgUrl={postFooterIcons[0].imageUrl} 
            />
            <Icon 
                imgStyle={styles.footerIcon} 
                imgUrl={postFooterIcons[1].imageUrl} 
            />
            <Icon 
                imgStyle={styles.shareIcon} 
                imgUrl={postFooterIcons[2].imageUrl} 
            />
        </View>
        <View>
            <Icon 
                imgStyle={styles.footerIcon} 
                imgUrl={postFooterIcons[3].imageUrl} 
            />
        </View>
    </View>
)

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image 
            style={ imgStyle } 
            source={{ uri: imgUrl }} 
        />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{flexDirection: 'row', marginTop: 4,}}>
        <Text style={{ color: 'white', fontWeight: '600' }}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5}}>   
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600', }}>{post.user}:   </Text>
            <Text>{post.caption}</Text>

        </Text>
    </View>
)

// Comment Cases
// A. 0 comments -> Don't render component
// B. 1 comment -> Render component with just that comment
// C. 2+ comments -> Render component with "all" and plural comments

// post.comments.length -> 0 or 1 or 2 or 3
// 0 = false
// 1 = true

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
        //  {/*conditional render of when the value is more than one it is true and do the following function below..*/}
    // placing the !! makes nothing show up referring to comments if there are 0 comments to be seen - (-double negation-)
            <Text style={{ color: 'gray' }}>
                View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
                {/* check the comments made on the post and if it is greater than 1 say comments and if there is only one say comment */}
            </Text>
    )}
    </View>
)

const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection: 'row', marginTop: 5,}}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600'}}>{ comment.user }</Text>{':  '}
                    { comment.comment }
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#FF3250',
        

    },

    footerIcon: {
        width: 33,
        height: 33,
    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    },

    likeIcon: {
        width: 40,
        height: 40,
        marginTop: -4, 
    },

    shareIcon: {
        width: 32,
        height: 32,
    }

})

export default Post;


