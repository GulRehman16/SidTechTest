import React, { FC } from 'react';
import { View, Text, Pressable, ActivityIndicator, Image, StyleSheet, PressableProps } from 'react-native';
import { Themes } from '../../constants';
import { AppStyles, AppAuthButtonStyles, AppBorderButtonStyles, AppPriButtonStyles } from '../../constants/appStyles';
import FastImage from 'react-native-fast-image';

interface AppButtonProps extends PressableProps {
  onPress: () => void;
  label: string;
  iconBG?: string;
  iconN?: string;
  iconT?: string;
  iconL?: boolean;
  iconR?: boolean;
  buttonStyle?: any; // Change the type according to your requirement
  color?: string;
  btnWidth?: number | string;
  position?: 'absolute' | 'relative';
  btnHeight?: number;
  icon2?: boolean;
  iconClr?: string;
  iconW?: number;
  iconH?: number;
  text?: boolean;
  brder1?: number;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  loader?: boolean;
  disabled?: boolean;
  borderRadius?: number;
}

const AppButton: FC<AppButtonProps> = ({
  onPress,
  label,
  iconBG,
  iconN,
  iconT,
  iconL,
  iconR,
  buttonStyle,
  color,
  btnWidth,
  position,
  btnHeight,
  icon2,
  iconClr,
  iconW,
  iconH,
  text,
  brder1,
  backgroundColor,
  borderWidth,
  borderColor,
  loader,
  disabled,
  borderRadius,
}) => {
  const icon = iconL || iconR;

  return (
    <Pressable
      onPress={onPress}
      style={[
        buttonStyle || {
          width: btnWidth || '100%',
          height: btnHeight || 50,
          borderRadius: brder1 || 0,
          backgroundColor: backgroundColor || '#ffff',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          borderWidth: borderWidth || 0,
          borderColor: borderColor || '#000000',
        },
        disabled && { opacity: 0.5 },
      ]}>
      {loader && <ActivityIndicator size="small" color="#ffffff" />}
      {text && (
        <Text
          style={{ color: color || 'white', fontWeight: 'bold', fontSize: 18 }}>
          {label}
        </Text>
      )}
      {icon && (
        <View
          style={{
            width: iconW || 35,
            height: iconH || 35,
            backgroundColor: iconBG || 'pink',
            borderRadius: borderRadius || 0,
            position: position || 'absolute',
            right: iconR ? 15 : undefined,
            left: iconL ? '29%' : undefined,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Image style={{ fontSize: 20 }} /> */}
        </View>
      )}
      {icon2 && (
        <View
          style={{
            width: iconW || 35,
            height: iconH || 35,
            backgroundColor: iconBG || 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{}}>{label}</Text>
          {/* <Icon
            name={iconN || 'right'}
            type={iconT || 'AntDesign'}

            style={{fontSize: 20, color: iconClr || 'white'}}
          /> */}
        </View>
      )}
    </Pressable>
  );
};

interface AppAuthButtonProps {
  title?: string;
  onPress: () => void;
  loader?: boolean;
  containerStyles?: any; // Change the type according to your requirement
  textColor?: string;
  textStyles?: any; // Change the type according to your requirement
  IconComp?: FC<any>; // Change the type according to your requirement
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

interface AppBorderButtonProps {
  title?: string;
  onPress: () => void;
  loader?: boolean;
  image?: any; // Change the type according to your requirement
  imageStyles?: any; // Change the type according to your requirement
  containerStyles?: any; // Change the type according to your requirement
  textStyles?: any; // Change the type according to your requirement
  id?: number;
}

const AppBorderButton: FC<AppBorderButtonProps> = ({
  title,
  onPress,
  loader,
  image,
  imageStyles,
  containerStyles,
  textStyles,
  id,
}) => {
  return (
    <Pressable onPress={!loader ? onPress : () => { }} style={[AppBorderButtonStyles.appBorderButtonWrapper, containerStyles]}>
      {id === 1 && loader && (<ActivityIndicator size="small" color={Themes.loaderColors.cobaltBlue} />)}
      {id !== 1 && loader && (<ActivityIndicator size="small" color={Themes.loaderColors.cobaltBlue} style={{ opacity: 0 }} />)}
      {!loader && (
        <Pressable style={{ flexDirection: 'row' }} onPress={onPress}>
          {image && (<FastImage  source={image} resizeMode={FastImage.resizeMode.contain} style={[AppBorderButtonStyles.appBorderButtonImage, imageStyles]} />)}
          {title && (<Text onPress={onPress} style={[AppStyles.appTextMedium, AppBorderButtonStyles.appBorderButton, textStyles]}>{title}</Text>)}
        </Pressable>
      )}
    </Pressable>
  );
};

interface AppPriButtonProps {
  title?: string;
  onPress: () => void;
  loader?: boolean;
  containerStyles?: any; // Change the type according to your requirement
  textColor?: string;
  textStyles?: any; // Change the type according to your requirement
  IconComp?: FC<any>; // Change the type according to your requirement
}

const AppPriButton: FC<AppPriButtonProps> = ({
  title,
  onPress,
  loader,
  containerStyles,
  textColor,
  textStyles,
  IconComp,
}) => {
  return (
    <Pressable onPress={!loader ? onPress : () => { }} style={[AppPriButtonStyles.appBorderButtonWrapper, containerStyles]}>
      {IconComp && <IconComp />}
      {loader && (<ActivityIndicator size="small" color={textColor || Themes.loaderColors.cobaltBlue} />)}
      {!loader && title && (<Text onPress={onPress} style={[AppStyles.appTextMedium, AppPriButtonStyles.appBorderButton, textStyles]}>{title}</Text>)}
    </Pressable>
  );
};

export { AppButton, AppAuthButton, AppBorderButton, AppPriButton };
