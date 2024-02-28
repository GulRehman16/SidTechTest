import React, { useState, useRef } from 'react';
import { TextInput, View, Text, StyleSheet, Pressable, TextStyle, ViewStyle } from 'react-native';
import { Themes } from '../../constants';
import { AppStyles } from '../../constants/appStyles';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  handleDropdownOpen?: () => void;
  value: string;
  placeHolder?: string;
  placeHolderColor?: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  secureText?: boolean;
  iconR?: boolean;
  iconRName?: string;
  iconL?: boolean;
  iconLName?: string;
  styleI?: TextStyle;
  onPressR?: () => void;
  multiLine?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  phoneNo?: boolean;
  height?: number;
  phoneIconWidth?: number;
  editable?: boolean;
  label?: string;
  onChangeCountry?: (code: string) => void;
  selectTextOnFocus?: boolean;
  pointerEvents?: 'auto' | 'none' | 'box-none' | 'box-only';
}

const FormTextInput: React.FC<Props> = ({
  value,
  placeHolder,
  placeHolderColor,
  onChangeText,
  onBlur,
  onFocus,
  secureText,
  iconL,
  iconLName,
  styleI,
  multiLine,
  autoCapitalize,
  height,
  editable,
  label,
  selectTextOnFocus = true,
  pointerEvents,
}) => {
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  return (
    <View style={[AppStyles.container, AppStyles.inputMainWrapper]}>
      {label && <Text style={AppStyles.labelText}>{label}</Text>}
      <View style={[AppStyles.inputContainer, { borderBottomColor: inputFocus ? Themes.borderColors.skyBlue : Themes.borderColors.platinum }]}>
        {iconL && iconLName && (<Icon name={iconLName} size={24} style={{ paddingLeft: 5 }} />)}

        <View pointerEvents={pointerEvents} style={{ flex: 1 }}>
          <TextInput
            autoCorrect={false}
            style={[AppStyles.input, styleI, { textAlignVertical: multiLine ? 'top' : 'center', height: height || 40 }]}
            value={value}
            autoCapitalize={autoCapitalize || 'sentences'}
            placeholder={placeHolder}
            placeholderTextColor={placeHolderColor || Themes.textColors.spanishGray}
            onChangeText={onChangeText}
            onFocus={() => { onFocus && onFocus(); setInputFocus(!inputFocus); }}
            onBlur={onBlur || undefined}
            secureTextEntry={secureText || false}
            multiline={multiLine || false}
            editable={editable !== undefined ? editable : true}
            selectTextOnFocus={selectTextOnFocus}
          />
        </View>
      </View>
    </View>
  );
};

export { FormTextInput };

const styles = StyleSheet.create({
  dropdownContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  dropdownLabel: {
    flex: 1,
    fontSize: 16,
  },
  dropdownArrow: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownOptions: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    maxHeight: 150,
    overflow: 'scroll',
  },
  dropdownOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
