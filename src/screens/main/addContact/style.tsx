import { WIDTH } from '../../../constants/variables';
import { Themes, Fonts } from '../../../constants';

const styles = {
  flex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 20,
    height: 100,
    width: WIDTH / 2.7,
    flex: 1,
  },
  rememberMe: {
    fontSize: Fonts.font14,
    color: Themes.textColors.davyGray,
    marginLeft: 8,
    top: 1,
  },
  forgot: {
    textAlign: 'right',
    fontSize: Fonts.font14,
    top: 1,
    color: Themes.textColors.tangBlue,
  },
  orWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 2,
    width: '100%',
    backgroundColor: Themes.bgColors.platinum,
  },
  orText: {
    fontSize: Fonts.font12,
    textAlign: 'center',
    color: Themes.textColors.spanishGray,
    position: 'absolute',
    zIndex: 9,
    backgroundColor: Themes.bgColors.white,
    paddingHorizontal: 10,
  },
  dontHaveAccWrapper: {
    paddingVertical: 20,
    justifyContent: 'center',
  },
  dontHaveAccText: {
    fontSize: Fonts.font14,
    textAlign: 'center',
    color: Themes.textColors.spanishGray,
  },
  signupText: {
    paddingLeft: 3,
    color: Themes.textColors.moroccanBlue,
  },
};

export default styles;
