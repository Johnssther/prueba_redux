
import React from 'react';
import { View, Text } from 'react-native';
import Prueba from './src/components/prueba'

//redux 
import { Provider } from 'react-redux'
import { store, persistor } from './src/store'
import { PersistGate } from 'redux-persist/integration/react';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<View><Text>Cargando...</Text></View>} persistor={persistor}>
          <Prueba />
        </PersistGate>
      </Provider>
    </>
  );
};


export default App;
