import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({ navigation }) => (
    <View style={StyleSheet.headerContainer}>
        <Header navigation={ navigation } />
        <FormikPostUploader navigation={ navigation } />
    </View>
)

const Header = ({ navigation }) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image 
                    source={{ uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }} 
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <Text style={{
                color: '#ffffff',
                fontWeight: '700',
                fontSize: 20,
                marginRight: 25,
                }}
            >
                NEW POST
            </Text>
            <Text></Text>
            {/* // text above is only as a placeholder to help center "NEW POST" text */}
        </View>
)

const style = StyleSheet.create ({
    container: {
        marginHorizontal: 10,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})

export default AddNewPost
