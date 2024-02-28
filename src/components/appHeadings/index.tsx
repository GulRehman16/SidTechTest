/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native';
import {AppStyles, AuthHeadingStyles } from '../../constants/appStyles';
import { Themes } from '../../constants';
import { AppIcons } from '../appIcons';

interface AuthHeadingProps {
  isUri?: boolean;
  title?: string;
  isBack?: boolean;
  onPressBack?: PressableProps['onPress'];
  subTitle?: string;
  RightComp?: React.ComponentType;
  image?: any;
  backIconColor?: string;
  containerStyles?: any;
}


export const AuthHeading: React.FC<AuthHeadingProps> = ({
  isUri = false,
  title = '',
  isBack = false,
  onPressBack,
  subTitle = '',
  RightComp,
  image,
  backIconColor = Themes.iconColors.black,
  containerStyles,
}) => {
  return (
    <View style={[containerStyles]}>
      <View style={[AuthHeadingStyles.iconsWrapper]}>
        <View style={[AuthHeadingStyles.leftIconWrapper]}>
          {isBack && (
            <Pressable style={{ width: '25%' }} onPress={onPressBack}>
              <AppIcons onPress={onPressBack} fontAwesome name="angle-left" size={42} color={backIconColor} />
            </Pressable>
          )}
        </View>

        <View style={[AuthHeadingStyles.rightIconWrapper]}>{RightComp && <RightComp />}</View>
      </View>
      {title && <Text numberOfLines={2} adjustsFontSizeToFit style={[AppStyles.appTextMedium, AuthHeadingStyles.authHeading]}>{title}</Text>}
    </View>
  );
};

