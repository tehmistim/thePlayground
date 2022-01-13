import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';
import { Button } from 'react-native';

const PLACEHOLDER_IMG = 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    return (
        <Formik
            initialValues={{caption: '', imageUrl: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
            // validateOnMount changes the ability of the share button to become clickable when a valid URL is placed in the input field.
        >

            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                <View style={{ 
                        margin: 20, 
                        justifyContent: 'space-between', 
                        flexDirection: 'row',
                    }}
                    >
                        <Image 
                            source={{ uri: PLACEHOLDER_IMG }} 
                            style={{ width: 100, height: 100 }}
                        />
                    <View style={{ flex: 1, marginLeft: 12 }}>
                        <TextInput 
                            style={{ color: 'white', fontSize: 20 }}
                            placeholder='Create your caption' 
                            placeholderTextColor='white'
                            multiline={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={values.caption}
                        />
                    </View>
                </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput 
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter Image Url' 
                        placeholderTextColor='white'
                        onChangeText={handleChange('imageUrl')} 
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                        // when a URL is not entered and they move from the input, it will show a red requirement message from the uploadPostSchema
                    )}

                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
            )}
        </Formik>
        
    )
}

export default FormikPostUploader
