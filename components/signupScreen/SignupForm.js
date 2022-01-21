import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Validator from 'email-validator';


const SignUpForm = ({ navigation }) => {
    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        username: Yup.string().required().min(2, 'Username is required'),
        password: Yup.string()
            .required()
            .min(8, 'Password must be at least 8 characters in length')

    });
        
    return (
            <View style={styles.wrapper}>
                <Formik
                    initialValues={{ email: '', username: '', password: '' }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                    validationSchema={SignUpFormSchema}
                    validateOnMount={true}
                >
                   {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                <>
                   
                <View style={[ styles.inputField, 
                    {
                        borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'
                    },
                ]}>
                    <TextInput
                        placeholderTextColor='#444'
                        placeholder='valid email address'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                </View>

                <View style={[ styles.inputField, 
                    {
                        borderColor: 1 >values.username.length || values.username.length
                        >=8 ? '#ccc' : 'red'
                    },
                ]}>
                    <TextInput
                        placeholderTextColor='#444'
                        placeholder='choose a username '
                        autoCapitalize='none'
                        textContentType='username'
                        autoFocus={true}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />
                </View>

                <View style={[ styles.inputField, 
                    {
                        borderColor: 1 > values.password.length || values.password.length >= 8 ? '#ccc' : 'red',
                    },
                ]}>
                    <TextInput 
                        placeholderTextColor='#444'
                        placeholder='password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                </View>
                
                <Pressable 
                    titleSize={20} 
                    style={styles.button} 
                    onPress={ handleSubmit }
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>

                <View style={styles.signupContainer}>
                    <Text>Already have an account?     </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#6BB0F5' }}>     Log In</Text>
                    </TouchableOpacity>
                </View>
                </>
                   )}
                </Formik>
            
    
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },

    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#c3bcaa',
        TextInput: 'white',
        marginBottom: 10,
        borderWidth: 1,
    },

    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    },

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 18,
    },

    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})

export default SignUpForm
