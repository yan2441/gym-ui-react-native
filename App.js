import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkOutScreen from './screens/WorkOutScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ProfileScreen from './screens/ProfileScreen';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="workOut"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
