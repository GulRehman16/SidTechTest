import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../screens/main/home';
import { AppRoutes } from '../../../config/appRoutes';
import AddContact from '../../../screens/main/addContact';

const Stack = createNativeStackNavigator();

const MainStackNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={AppRoutes.HOME} component={Home} options={{ headerShown: false }} />
            <Stack.Screen name={AppRoutes.ADDCONTACT} component={AddContact} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
};

export default MainStackNavigator;