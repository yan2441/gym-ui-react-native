import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkOutScreen from './screens/WorkOutScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ProfileScreen from './screens/ProfileScreen';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from 'expo-constants';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  useFonts
} from '@expo-google-fonts/poppins'

const Tab = createBottomTabNavigator();

export default function App() {
  useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="profile"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            headerShown: false,
          }}>
          <Tab.Screen
            name="workOut"
            component={WorkOutScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }} />
          <Tab.Screen
            name="exercise"
            component={ExerciseScreen}
            options={{
              tabBarLabel: 'work',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="wallet" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
