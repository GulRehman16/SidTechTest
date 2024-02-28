import React, { FC } from 'react';
import { View, Text, Pressable, ActivityIndicator, Image, StyleSheet, PressableProps } from 'react-native';
import { Themes } from '../../constants';
import { AppStyles, AppAuthButtonStyles } from '../../constants/appStyles';



interface AppAuthButtonProps {
  title?: string;
  onPress: () => void;
  loader?: boolean;
  containerStyles?: any; 
  textColor?: string;
  textStyles?: any; 
  IconComp?: FC<any>; 
  isDisable?: boolean;
}

const AppAuthButton: FC<AppAuthButtonProps> = ({
  title,
  onPress,
  loader,
  containerStyles,
  textColor,
  textStyles,
  IconComp,
  isDisable = false,
}) => {
  const bgColor = isDisable ? Themes.statusColors.default : Themes.secondary;
  const onPressBtn = loader ? () => { } : onPress;

  return (
    <Pressable disabled={isDisable} onPress={onPressBtn} style={[AppAuthButtonStyles.appAuthButtonWrapper, { backgroundColor: bgColor }, containerStyles]}>
      {IconComp && <IconComp />}
      {loader && (<ActivityIndicator size="small" color={textColor || Themes.loaderColors.white} />)}
      {!loader && title && (<Text disabled={isDisable} onPress={onPressBtn} style={[AppStyles.appTextMedium, AppAuthButtonStyles.appAuthButton, textStyles, { color: textColor || Themes.textColors.white }]}>{title}</Text>)}
    </Pressable>
  );
};




export {  AppAuthButton };
