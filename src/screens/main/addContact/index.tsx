import React, { useState } from 'react';
import { ScrollView, SafeAreaView, Text, KeyboardAvoidingView, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormTextInput, AuthHeading, AppAuthButton, AppIcons } from '../../../components';
import { AppStyles } from '../../../constants/appStyles';
import { Themes } from '../../../constants';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';
import { addContact } from '../../../redux/contactSlice';
import { PhoneNumberInput } from '../../../components/phoneNumberInput';

const AddContact: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [callingCode, setCallingCode] = useState('92');
  const [contactData, setContactData] = useState<{
    name: string;
    phoneNumber: string;
    image: string | null;
  }>({
    name: '',
    phoneNumber: '',
    image: null,
  });

  const functions = {

    goBack: () => {
      navigation.goBack();
    },
  }
  const handleChooseImage = () => {
    ImageCropPicker.openPicker({
      multiple: false,
      cropping: true,
      cropperCircleOverlay: true,
      mediaType: 'photo',
    })
      .then(image => {
        if (!image) return;

        setContactData({ ...contactData, image: image.path });
      })
      .catch(error => {
        console.log('Error selecting image:', error);
      });
  };
  const dispatch = useDispatch()

  const validationSchema = yup.object().shape({
    name: yup.string()
      .matches(/^[A-Za-z' ']+$/, 'Name should only contain letters')
      .required('Name is required'),
    phoneNumber: yup.string()
      .matches(/^[0-9]+$/, 'Phone Number must contain only numbers')
      .min(7, 'Phone Number must be at least 7 digits')
      .max(15, 'Phone Number can be at most 15 digits')
      .required('Phone Number is required'),
  });

  return (
    <SafeAreaView style={AppStyles.container}>
      <KeyboardAvoidingView style={AppStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={AppStyles.authBody}>
            <AuthHeading
              title={'Add Contact'}
              isBack
              onPressBack={functions.goBack}
            />
            <View style={{ paddingTop: 30 }}>
              <Formik
                initialValues={{
                  name: '',
                  phoneNumber: '',
                }}
                onSubmit={values => {
                  const fullPhoneNumber = `+${callingCode}${values.phoneNumber}`;
                  dispatch(addContact({
                    ...values,
                    id: Date.now().toString(),
                    phoneNumber: fullPhoneNumber,
                    image: contactData.image || ''
                  }));
                  navigation.goBack();
                }}
                validationSchema={validationSchema}
              >
                {({ handleChange, handleSubmit, values, errors, isValid=false }) => (
                  <>
                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity onPress={handleChooseImage}>
                        <View style={styles.imageContainer}>
                          {contactData.image ? (
                            <Image source={{ uri: contactData.image }} style={{ width: 150, height: 150 }} />
                          ) : (
                            <AppIcons entypo name="user" size={100} color={Themes.bgColors.lightGray} />
                          )}
                        </View>
                        <View style={styles.plusIconContainer}>
                          <AppIcons onPress={handleChooseImage} fontAwesome5 name="plus" size={24} color={Themes.secondary} />
                        </View>
                      </TouchableOpacity>

                    </View>
                    <FormTextInput

                      value={values.name}
                      onChangeText={handleChange('name')}
                      placeHolder="Enter Name"
                      label="Name"
                    />
                    {errors.name && <Text style={AppStyles.errorMessage}>{errors.name}</Text>}

                    <PhoneNumberInput
                      label={'Phone Number'}
                      value={values.phoneNumber}
                      callingCode={callingCode}
                      handlePhoneNumberChange={handleChange('phoneNumber')}
                      onSelectCountry={(country) => setCallingCode(country.callingCode)}
                    
                    />


                    {errors.phoneNumber && <Text style={AppStyles.errorMessage}>{errors.phoneNumber}</Text>}
                    <View style={{ marginTop: 10 }}>
                      <AppAuthButton title="Add Contact" onPress={handleSubmit} isDisable={!isValid} />
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddContact;


const styles = StyleSheet.create({
  imageContainer: {

    borderRadius: 100,
    overflow: 'hidden',
    width: 150,
    height: 150,
    borderWidth: 1.5,
    borderColor: Themes.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  errorMessage: {
    color: 'red',
  },

})