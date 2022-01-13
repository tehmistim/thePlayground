import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency/96/000000/dog-house.png',
        inactive: 'https://img.icons8.com/ios/100/ffffff/dog-house.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/fluency/96/000000/search.png',
        inactive: 'https://img.icons8.com/ios/100/ffffff/search--v1.png'

    },
    {
        name: 'Moments',
        active: 'https://img.icons8.com/color/50/000000/video.png',
        inactive: 'https://img.icons8.com/ios/50/ffffff/video.png'

    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-shopping-bag-pets-accessories-those-icons-lineal-color-those-icons.png',
        inactive: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-shopping-bag-ecommerce-kiranshastry-lineal-kiranshastry.png'

    },
    {
        name: 'Profile',
        active: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/271135142_1111462756349462_8776897941439461957_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=h-2N69_e7E8AX9zYV7c&_nc_ht=scontent-atl3-1.xx&oh=00_AT_-VNJs2cEIhxx6wbXmBrG4t4s2wKhgnFpm8hTDtj0ikQ&oe=61DA2C37',
        inactive: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/271135142_1111462756349462_8776897941439461957_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=h-2N69_e7E8AX9zYV7c&_nc_ht=scontent-atl3-1.xx&oh=00_AT_-VNJs2cEIhxx6wbXmBrG4t4s2wKhgnFpm8hTDtj0ikQ&oe=61DA2C37'

    },
]
// icons will be in states and need to useState and will be EXPORTED out to be used and not be used in BottomTabs.js

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')
    
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
                source={{uri: activeTab === icon.name ? icon.active: icon.inactive}} 
                
                style={[
                    styles.icon, 
                    icon.name === 'Profile' 
                        ? styles.profilePic 
                        : styles.icon
                ]}
                // {/* // image function  for the SOURCE that states if the icon is clicked/selected show the active icon and when not clicked/selected show the inactive icon */}
                // {/* // conditional function for the STYLE going through all the icons and only setting a specific style to the icon that matches the name called upon.  IT also uses a dynamic styling function below */}
            />
        </TouchableOpacity>
    )

    return (
        <View styles={styles.wrapper}>
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '1d1606',

    },
    
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
        borderTopColor: 'white',
        borderTopWidth: 1,
        padding: 5,
    },
    
    icon: {
        width: 30,
        height: 30,
    },

    profilePic: {
        borderRadius: 50,
        borderColor: 'yellow',
    },
})

export default BottomTabs;
