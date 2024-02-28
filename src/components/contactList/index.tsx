import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, FlatList, Dimensions } from 'react-native';
import { AppIcons } from '..';
import { Images, Themes } from '../../constants';

const { width } = Dimensions.get('window');

interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  image: any;
}

interface ContactListProps {
  contacts: Contact[];
  onDeleteContact: (index: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDeleteContact }) => {
  const renderItem = ({ item, index }: { item: Contact, index: number }) => {
    const handleDelete = () => {
      Alert.alert(
        'Delete Contact',
        `Are you sure you want to delete ${item.name}?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Delete', onPress: () => onDeleteContact(index), style: 'destructive' }
        ],
        { cancelable: true }
      );
    };

    return (
      <View style={styles.contactContainer}>

        <Image
          source={item.image ? (typeof item.image === 'string' ? { uri: item.image } : item.image) : Images.Icons.demoAvatar}
          style={styles.contactImage}
        />
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
        </View>
        <TouchableOpacity onPress={handleDelete} style={styles.trashIcon}>
          <AppIcons onPress={handleDelete} entypo={true} name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View >
    );
  };

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export { ContactList };

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,


  },
  contactContainer: {
    marginTop: 10,
    elevation: 2,
    borderRadius: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#fff',

    backgroundColor: 'white',
  },
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 0.8,
    marginRight: 20,
    borderColor: Themes.secondary
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  phoneNumber: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  trashIcon: {
    padding: 10,
  },
});
