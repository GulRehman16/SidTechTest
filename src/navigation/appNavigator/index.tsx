import React from 'react';
import { NavigationContainer } from '@react-navigation/native';;
import { createNativeStackNavigator } from '@react-navigation/native-stack';;
import { AppRoutes } from '../../config/appRoutes';
import MainStackNavigator from '../StackNavigators/mainStackNavigator';
import Splash from '../../screens/others/splash';


const MyStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <MyStack.Navigator>
                <MyStack.Screen name={AppRoutes.SPLASH} component={Splash} options={{ headerShown: false }} />
                <MyStack.Screen name={AppRoutes.MAIN} component={MainStackNavigator} options={{ headerShown: false }} />
            </MyStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;