import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';

import configStore from './store/storeConfig';

import Home from './Home';
import Description from './Detalhes';

const Stack = createStackNavigator();
const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Description" component={Description} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
