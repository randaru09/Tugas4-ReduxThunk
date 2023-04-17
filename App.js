import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Datalist from './components/Datalist';
import Thunk from './components/redux_thunk';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Datalist" component={Datalist} options={{ headerShown: false }}/>
        <Stack.Screen name="Thunk" component={Thunk} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}