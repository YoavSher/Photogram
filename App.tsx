import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useGestureHandlerRef } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './firebase.config';
import { Home } from './screens/home';
import { Login } from './screens/login';
import { NewPost } from './screens/new-post';
import { Signup } from './screens/signup';
import { RootStackParamList } from './types/navigations-type';


const Stack = createNativeStackNavigator<RootStackParamList>();
const screenOps = {
  headerShown: false
}
export default function App() {
  const { currUser } = getLoggedInUser()
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={currUser ? 'Home' : 'Signup'}
          screenOptions={screenOps}>
          {currUser ? <>
            <Stack.Screen
              name='Home'
              component={Home} />
            <Stack.Screen
              name='NewPost'
              component={NewPost} />
          </> : null}
          <Stack.Screen
            name='Login'
            component={Login} />
          <Stack.Screen
            name='Signup'
            component={Signup} />
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

const getLoggedInUser = () => {
  const [currUser, setCurrUser] = useState<unknown | null>(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => userHandler(user))
    return unsubscribe
  }, [])
  const userHandler = (user: unknown) => {
    user ? setCurrUser(user) : setCurrUser(null)
  }
  return { currUser }
}