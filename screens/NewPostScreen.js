import React from 'react'
import { SafeAreaView } from 'react-native'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#1d1606', flex: 1 }}>
            <AddNewPost />
        </SafeAreaView>
    )
}

export default NewPostScreen
