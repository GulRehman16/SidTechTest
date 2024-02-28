import React, { FC } from 'react';
import { Pressable, PressableProps } from 'react-native';
import AnIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface AppIconsProps extends PressableProps {
    anIcon?: boolean;
    ionicon?: boolean;
    fontAwesome?: boolean;
    fontAwesome5?: boolean;
    feather?: boolean;
    entypo?: boolean;
    fontisto?: boolean;
    materialCommunityIcons?: boolean;
    simpleLineIcons?: boolean;
    materialIcons?: boolean;
    octicons?: boolean;
    name?: string;
    color?: string;
    size?: number;
}

const AppIcons: FC<AppIconsProps> = ({
    anIcon,
    ionicon,
    fontAwesome,
    fontAwesome5,
    feather,
    entypo,
    fontisto,
    materialCommunityIcons,
    simpleLineIcons,
    materialIcons,
    octicons,
    style,
    name,
    onPress,
    color,
    size,
}) => (
    <Pressable onPress={onPress}>
        {anIcon && <AnIcon name={name || 'menu'} size={size || 20} color={color || 'red'} style={style} />}
        {ionicon && <IonIcon name={name || 'menu'} size={size || 20} color={color || 'red'} style={style} />}
        {fontAwesome && <FontAwesome name={name || 'circle-thin'} size={size || 20} color={color || 'red'} style={style} />}
        {fontAwesome5 && <FontAwesome5 name={name || 'bomb'} size={size || 20} color={color || 'red'} style={style} />}
        {entypo && <Entypo name={name || 'aircraft-take-off'} size={size || 20} color={color || 'red'} style={style} />}
    </Pressable>
);

export { AppIcons };
