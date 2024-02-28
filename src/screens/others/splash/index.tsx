import React, { useEffect, useState } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { AppRoutes } from '../../../config/appRoutes';
import { Images } from '../../../constants';

const Splash: React.FC<{ navigation: any }> = ({ navigation }) => {
        const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            navigation.replace(AppRoutes.MAIN,{screen:AppRoutes.HOME});
        });
    }, []);

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.logoContainer, { opacity }]}>
                <Animated.Image
                    resizeMethod={'auto'}
                    source={Images.Icons.SplashLogo}
                    style={[styles.logo, { transform: [{ translateY }] }]}
                />
            </Animated.View>
            <Animated.Text style={[styles.slogan, { opacity }]}>Contact List</Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
    },
    slogan: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
    },
});

export default Splash;
