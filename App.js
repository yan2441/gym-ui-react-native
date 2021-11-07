import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkOutScreen from './screens/WorkOutScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ProfileScreen from './screens/ProfileScreen';
import QrCodeScreen from './screens/QrCodeScreen';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from 'expo-constants';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  useFonts
} from '@expo-google-fonts/poppins'
import Home from './components/svg/Home';
import Wallet from './components/svg/Wallet';
import Profile from './components/svg/Profile';
import AppLoading from 'expo-app-loading';


const Tab = createBottomTabNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              tabBarActiveTintColor: '#e91e63',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: { backgroundColor: '#000', borderTopColor: "#000" },
            }}>
            <Tab.Screen
              name="workOut"
              component={WorkOutScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Home name="home" color={color} size={size} />
                ),
              }} />
            <Tab.Screen
              name="exercise"
              component={ExerciseScreen}
              options={{
                tabBarLabel: 'work',
                tabBarIcon: ({ color, size }) => (
                  <Wallet name="wallet" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="profile"
              component={ProfileScreen}
              options={{
                tabBarLabel: 'profile',
                tabBarIcon: ({ color, size }) => (
                  <Profile name="account" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="qr"
              component={QrCodeScreen}
              options={{
                tabBarLabel: 'profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="qrcode" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
