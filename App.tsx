import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/home';
import { Login } from './screens/login';
import { NewPost } from './screens/new-post';
import { RootStackParamList } from './types/navigations-type';


const Stack = createNativeStackNavigator<RootStackParamList>();
const screenOps = {
  headerShown: false
}
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={screenOps}>
          <Stack.Screen
            name='Home'
            component={Home} />
          <Stack.Screen
            name='NewPost'
            component={NewPost} />
          <Stack.Screen
            name='Login'
            component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});
