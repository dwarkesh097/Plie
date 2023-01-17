import React from 'react';
import {View} from 'react-native';
import MainNavigator from './src/navigation/main_navigator';
import AuthNavigator from './src/navigation/auth_navigator';
import configureStore from './src/redux/store/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

const {persistor, store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <AuthNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};
export default App;
