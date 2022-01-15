import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Validator from 'email-validator';


const LoginForm = () => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string()
            .required()
            .min(8, 'Password must be at least 8 characters in length')

    });

    return (
            <View style={styles.wrapper}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                    validationSchema={LoginFormSchema}
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
                        placeholder='Phone number, username or email'
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
                        borderColor: 1 > values.password.length || values.password.length >= 8 ? '#ccc' : 'red',
                    },
                ]}>
                    <TextInput 
                        placeholderTextColor='#444'
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                </View>
                <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                    <Text style={{ color: '#6BB0F5'}}>Forgot Password?</Text>
                </View>
                <Pressable 
                    titleSize={20} 
                    style={styles.button} 
                    onPress={ handleSubmit }
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                <View style={styles.signupContainer}>
                    <Text>
                        Don't have an account yet?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#6BB0F5' }}>          Sign Up Now</Text>
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

export default LoginForm
