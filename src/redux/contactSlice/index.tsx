// src/features/contacts/contactsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '../store';
import { Images } from '../../constants';

interface Contact {
    id: string;
    name: string;
    phoneNumber: string;
    image: string;
}

interface ContactsState {
    contacts: Contact[];
}
const CONTACTS_DATA: Contact[] = [
    { id: '1', name: 'John Doe', phoneNumber: '+1234567890', image: Images.Icons.ladyAvatar },
    { id: '2', name: 'Jane Smith', phoneNumber: '+9876543210', image: Images.Icons.demoAvatar },
    { id: '3', name: 'Alice Johnson', phoneNumber: '+1122334455', image: Images.Icons.ladyAvatar },
    { id: '4', name: 'Bob Brown', phoneNumber: '+9988776655', image: Images.Icons.demoAvatar },
    { id: '5', name: 'Emily Davis', phoneNumber: '+6677889900', image: Images.Icons.demoAvatar },
];
const initialState: ContactsState = {
    contacts: CONTACTS_DATA,
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, action: PayloadAction<Contact[]>) => {
            state.contacts = action.payload;
        },
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload);
            saveContactsToStorage(state.contacts);
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            saveContactsToStorage(state.contacts);
        },
    },
});

const saveContactsToStorage = async (contacts: Contact[]) => {
    await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
};

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state: RootState) => state.contacts.contacts;

export default contactsSlice.reducer;
