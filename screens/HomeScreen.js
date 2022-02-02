import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';
import { db } from '../firebase';

const HomeScreen = ({navigation}) => {
    useEffect(() => {
        db.collectionGroup('posts').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data()))
        })
        // firebase uses collectionGroups to get specific database data
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1d1606',
        flex: 1,
    },
})

export default HomeScreen;
