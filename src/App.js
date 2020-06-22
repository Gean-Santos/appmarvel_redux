import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import promise from 'redux-promise';

import rootReducer from './store';

import Home from './Home';
import Description from './Detalhes';

const Stack = createStackNavigator();
const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer);

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
