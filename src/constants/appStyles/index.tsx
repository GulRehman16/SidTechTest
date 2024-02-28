import { StyleSheet } from 'react-native';
import { Themes, Families, Fonts, BorRadius } from '../themes';

const {  PoppinsMedium } = Families?.poppins;

export const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.bgColors.white,
    },
    countryPickerContainer: {
        alignItems: 'center',
        justifyContent: 'center'

    },
   
    errorMessage: {
        fontSize: Fonts.font14, color: Themes.statusColors.danger,
    },
    authBody: {
        paddingHorizontal: 20, width: '100%', alignSelf: 'center',
        backgroundColor: Themes.bgColors.white, paddingTop: 50,
    },
    screensBody: {
        paddingHorizontal: 20, width: '100%', alignSelf: 'center',
        backgroundColor: Themes.bgColors.white, paddingTop: 25,
    },
    labelText: {
        fontFamily: PoppinsMedium, fontStyle: 'normal', fontWeight: '500', fontSize: Fonts.font12,
        color: Themes.textColors.spanishGray, top: 5,
    },
    inputMainWrapper: {
        marginVertical: 8, width: '100%',
    },
    inputContainer: {
        flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        borderBottomWidth: 2, borderBottomColor: Themes.borderColors.platinum,
    },
    input: {
        fontFamily: PoppinsMedium, fontStyle: 'normal', fontWeight: '500', fontSize: Fonts.font14,
        width: '100%', color: Themes.secondary, flex: 1, alignItems: 'center', padding: 0,
    },
    inputRightIcon: {
        justifyContent: 'center', alignItems: 'center', height: '100%', paddingLeft: 15,
    },
    phoneInputContainerStyle: {
        width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 10,
    },
    phoneInputTextContainerStyle: {
        justifyContent: 'center',
    },
    phoneInputTextInputStyle: {
        fontSize: Fonts.font14, color: Themes.textColors.raisinBlack, padding: 0,
    },
    phoneInputCountryCode: {
        fontSize: Fonts.font14, marginRight: 5,
    },
    cardStyles: {
        backgroundColor: Themes.bgColors.whiteGray, borderWidth: 1,
        borderColor: Themes.borderColors.flashWhite, borderRadius: BorRadius.borderRadius1,
    },
});




export const AppAuthButtonStyles = StyleSheet.create({
    appAuthButtonWrapper: {
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        flex: 1, padding: 7, backgroundColor: Themes.secondary, borderRadius: BorRadius.borderRadius1, minHeight: 48,
    },
    appAuthButton: {
        fontSize: Fonts.font14, color: Themes.textColors.white, textAlign: 'center', textTransform: 'uppercase', top: 1,
    },
});



export const AuthHeadingStyles = StyleSheet.create({
    authHeading: {
        fontSize: Fonts.font24, color: Themes.textColors.raisinBlack, textAlign: 'center',
    },
    authSubHeading: {
        fontSize: Fonts.font12, paddingHorizontal: 20,
        color: Themes.textColors.spanishGray, textAlign: 'center', paddingVertical: 5,
    },
    iconsWrapper: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    rightIconWrapper: {
        alignItems: 'flex-end', flex: 1,
    },
    leftIconWrapper: {
        alignItems: 'flex-start', flex: 1,
        marginTop: 6,

    },
    imageWrapper: {
        alignItems: 'center', flex: 1, top: 10, paddingBottom: 10,
    },
    imageStyles: {
        height: 40, width: 135,
    },
});




