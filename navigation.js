import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import NewPostScreen from './screens/NewPostScreen'
import SignUpScreen from './screens/SignupScreen'
import TestScreen from './screens/TestScreen'


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => (

    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='SignUpScreen' 
            screenOptions={screenOptions}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} /> 
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} /> 
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} /> 
            <Stack.Screen name='TestScreen' component={TestScreen} /> 
        </Stack.Navigator>
    </NavigationContainer>
    
)

export default SignedInStack


// () = implict return which is used at times for functions with no "return" call