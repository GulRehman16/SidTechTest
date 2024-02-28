import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CountryPicker, { Country, getAllCountries, Flag } from 'react-native-country-picker-modal';
import { AppStyles } from '../../constants/appStyles';
import { Themes } from '../../constants';



interface PhoneNumberInputProps {
    label?: string;
    onSelectCountry: (country: { cca2: string; callingCode: string }) => void;
    handlePhoneNumberChange: (text: string) => void;
    value: string;
    callingCode: string;
}
interface SimplifiedCountry {
    cca2: string;
    callingCode: string[];
}
const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ label, onSelectCountry, handlePhoneNumberChange, value, callingCode }) => {
    const [inputFocus, setInputFocus] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<SimplifiedCountry>({
        cca2: 'PK',
        callingCode: ['92'],
    });

    const countryPickerRef = useRef(null);
    const onCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        if (onSelectCountry) {
            onSelectCountry({ cca2: country.cca2, callingCode: country.callingCode[0] });
        }
    };



    return (
        <View style={[AppStyles.container, AppStyles.inputMainWrapper]}>
            {label && <Text style={AppStyles.labelText}>{label}</Text>}
            <View
                style={[
                    AppStyles.inputContainer,
                    { borderBottomColor: inputFocus ? Themes.borderColors.skyBlue : Themes.borderColors.platinum },
                ]}
            >
                <TouchableOpacity style={AppStyles.countryPickerContainer} onPress={() => countryPickerRef.current?.open()}>
                    <CountryPicker
                        {...{
                            ref: countryPickerRef,
                            onSelect: onCountrySelect,
                            withFilter: true,
                            withCallingCode: true,
                            countryCode: selectedCountry?.cca2 as "PK" | "US" | "CA",
                            excludeCountries: ['AX', 'UM']
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        +{selectedCountry.callingCode[0]} |
                    </Text>
                    <TextInput
                        style={{
                            flex: 1,
                            marginLeft: 3,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                        placeholder="Phone Number"
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                        value={value}
                        onChangeText={handlePhoneNumberChange}
                        keyboardType="phone-pad"
                    />
                </View>
            </View>
        </View>
    );
};

export { PhoneNumberInput };
