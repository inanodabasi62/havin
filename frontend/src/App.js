import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Verify from './screens/Verify';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Recommendations from './screens/Recommendations';
import Feedback from './screens/Feedback';
import TryOn from './screens/TryOn';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Recommendations" component={Recommendations} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="TryOn" component={TryOn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
