import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Pressable } from 'react-native';
import { ContactList, AppIcons, AuthHeading } from '../../../components';
import { Themes } from '../../../constants';
import { AppRoutes } from '../../../config/appRoutes';
import { AppStyles } from '../../../constants/appStyles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { deleteContact, setContacts } from '../../../redux/contactSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {

  const dispatch = useDispatch();

  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  useEffect(() => {
    const loadContacts = async () => {
      const contactsString = await AsyncStorage.getItem('contacts');
      const loadedContacts = contactsString ? JSON.parse(contactsString) : undefined;
      if (loadedContacts) {
        dispatch(setContacts(loadedContacts));
      }
    };

    loadContacts();
  }, [dispatch]);
  const handleDeleteContact = (index: number) => {
    const contactId = contacts[index].id;
    dispatch(deleteContact(contactId));
  };
  const handleAddContact = () => {
    navigation.navigate(AppRoutes.ADDCONTACT);
  };
  return (
    <SafeAreaView style={[AppStyles.container, styles.container]}>
      <View style={styles.contentContainer}>
        <AuthHeading title={'Contacts'} />

        <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
      </View>
      <Pressable
        style={styles.addIcon}
        onPress={handleAddContact}
      >
        <AppIcons fontAwesome5 onPress={handleAddContact}
          name="plus" size={24} color={Themes.bgColors.white} />
      </Pressable>

    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.bgColors.white,
  },
  contentContainer: {
    backgroundColor: Themes.bgColors.white,
    width: '90%',
    marginTop: 42,
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 80,
  },
  addIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Themes.secondary,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
