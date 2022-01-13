import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/users';


const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
            >
                {USERS.map((story, index) => (
                    <View key={ index } style={{ alignItems: 'center'}}>
                        <Image source={{uri: story.image}} style={styles.story} />
                        <Text style={{ color: 'white' }}>
                            { story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + ' ... ' : story.user.toLowerCase() }
                        </Text>
                    </View>                
                ))}

            </ScrollView>
            
            <View
            style={{ 
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                padding: 5,
            }}
        />
        </View>
        
    )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#FF3250',

    },
})

export default Stories;


// LINE 17 - is for limiting the character length of the user name in stories to be under 11 characters and shows the name is longer with ... notation

