import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import SignUpForm from '../components/signupScreen/SignUpForm';

const PLAYGROUND_LOGO = 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/271935955_10226154154629216_1263521107427513589_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=0TUUg4Il4nEAX8AdH1z&_nc_ht=scontent-atl3-1.xx&oh=00_AT8vRmHQ-GSZ86Rqj6dTkOk_Y33-itjSu9MJiG3D_SDb1g&oe=61EDDA38'


const SignUpScreen = ({ navigation }) => (
    <View style={ styles.container }>
        <View style={ styles.logoContainer }>
            <Image source={{ uri: PLAYGROUND_LOGO, height: 100, width: 350 }} />
        </View>
        <SignUpForm navigation={navigation} />
    </View>
)

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 80,

    }


})

export default SignUpScreen