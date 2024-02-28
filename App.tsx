import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/appNavigator';
import { StatusBar } from 'react-native'
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { setContacts } from './src/redux/contactSlice';

const App: React.FC = (props) => {

  return (
    <>
      <Provider store={store}>
        <StatusBar translucent barStyle={'dark-content'} backgroundColor={'#fff'} {...props} />
        <AppNavigator {...props} />
      </Provider>
    </>
  );
};

export default App;