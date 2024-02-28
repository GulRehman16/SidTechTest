import { StyleSheet } from 'react-native';
import { Themes, Families, Fonts, BorRadius } from '../themes';

const { PoppinsRegular, PoppinsMedium, PoppinsSemibold, PoppinsBold } = Families?.poppins;

export const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.bgColors.white,
    },
    countryPickerContainer: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    shadow: {
        borderWidth: 0, elevation: 5, shadowColor: Themes.shadowColors.pureBlack, shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25, shadowRadius: 5,
    },
    appTextRegular: {
        fontFamily: PoppinsRegular, fontWeight: '400', fontStyle: 'normal',
    },
    appTextMedium: {
        fontFamily: PoppinsMedium, fontWeight: '500', fontStyle: 'normal',
    },
    appTextSemiBold: {
        fontFamily: PoppinsSemibold, fontWeight: '600', fontStyle: 'normal',
    },
    appTextBold: {
        fontFamily: PoppinsBold, fontStyle: 'normal',
    },
    appSecText: {
        color: Themes.secondary, fontSize: Fonts.font16,
    },
    defaultText: {
        color: Themes.textColors.gray, fontSize: Fonts.font20,
    },
    ericColor: {
        color: Themes.textColors.erieBlack,
    },
    capitalText: {
        textTransform: 'capitalize',
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


export const AppBorderButtonStyles = StyleSheet.create({
    appBorderButtonWrapper: {
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        flex: 1, padding: 8, backgroundColor: Themes.bgColors.white, borderRadius: BorRadius.borderRadius1, minHeight: 40,
        borderWidth: 1, borderColor: Themes.borderColors.gainsBoro,
    },
    appBorderButtonImage: {
        height: 24, width: 24, marginRight: 10,
    },
    appBorderButton: {
        color: Themes.borderColors.cobaltBlue, textTransform: 'capitalize',
        fontSize: Fonts.font16, textAlign: 'center', top: 1,
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

export const AppPriButtonStyles = StyleSheet.create({
    appBorderButtonWrapper: {
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        flex: 1, padding: 8, backgroundColor: Themes.bgColors.whiteTransparent, minHeight: 40, marginVertical: 15,
    },
    appBorderButtonImage: {
        height: 24, width: 24, marginRight: 10,
    },
    appBorderButton: {
        color: Themes.textColors.davyGray, fontSize: Fonts.font14, textAlign: 'center', top: 1,
    },
});

// headings components
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

export const AppHeadingStyles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row', alignItems: 'center',
    },
    flex: {
        flex: 1,
    },
    halfFlex: {
        flex: 0.2, justifyContent: 'center', alignItems: 'flex-start',
        marginTop: 6
    },
    drawerImg: {
        height: 30, width: 30,
    },
    title: {
        fontSize: Fonts.font16, color: Themes.textColors.jetBlack, alignSelf: 'center',
    },
    image: {
        height: 50, width: 'auto',
    },
});

// dropdown components
export const AppDropDownStyles = StyleSheet.create({
    dropDownPicker: {
        backgroundColor: Themes.bgColors.white, height: 40, borderWidth: 0,
        borderBottomWidth: 2, borderBottomColor: Themes.borderColors.platinum,
        zIndex: 99999, borderRadius: 0, paddingHorizontal: 0,
    },
    searchTextInputStyle: {
        borderWidth: 0, borderBottomColor: Themes.borderColors.platinum,
        borderBottomWidth: 1, borderRadius: 0,
    },
    dropDownContainerStyle: {
        zIndex: 99999, borderWidth: 0, elevation: 5, shadowColor: Themes.shadowColors.pureBlack, shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25, shadowRadius: 5,
    },
});
