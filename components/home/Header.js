import React from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { firebase } from '../../firebase';

const handleSignOut = async () => {
    try {
        await 
        firebase.auth().signOut()
        console.log('Signed Out')
    } catch (error) {
        console.log(error)
    }
}

const MY_URL = 'http://www.louisianahuskyrescue.com';

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleSignOut}
            >
                <Image 
                    style={styles.logo} 
                    source={require('../../assets/headerLogo.png')} 
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
            <TouchableOpacity 
                onPress={() => Linking.openURL(MY_URL)}
            >
                    <Image 
                    source={require('../../assets/lahr.png')}
                    style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Image 
                    source={{uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}}
                    style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={{uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}}
                    style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text styles={styles.unreadBadgeText}>
                            16
                        </Text>
                    </View>
                    <Image 
                    source={{uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}}
                    style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // StyleSheet will need to be imported in this usage
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    iconsContainer: {
        flexDirection: 'row',
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },

    icon: {
        width: 30,
        height: 30,
        marginleft: 10,
        resizeMode: 10,
    },

    unreadBadge: {
        backgroundColor: '#fff556',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },    

    unreadBadgeText: {
        color: 'white',
        fontWeight: '800',
    },
})

export default Header;

// LINE  7 - adding a style to view using the styles function below instead of css
// LINE  9 - anytime an image is used it must be imported into the component with react/react-native
// LINE 11 - adding a style too the logo using the styles function below instead of css
