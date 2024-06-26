import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View ,Image, Button, FlatList} from 'react-native';
import App from './App';
import { Ionicons } from '@expo/vector-icons';
import StatisticScreen from './StatisticScreen';
import SettingScreen from './SettingScreen';
import HomeScreen from './HomeScreen';
import CardScreen from './MyCardScreen';


const Tab = createBottomTabNavigator();

export function Hometab(){
  return(
    <Tab.Navigator  
    tabBarOptions={{
      activeTintColor: '#23265A',
      inactiveTintColor: 'gray',
    }}
    >
    <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" size={size} color={color} />
      ),
    }}
    />

      <Tab.Screen
    name="My Cards"
    component={CardScreen}
    options={{
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="card" size={size} color={color} />
      ),
    }}
    />
        <Tab.Screen
    name="Statistics"
    component={StatisticScreen}
    options={{
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="analytics" size={size} color={color} />
      ),
    }}
    />
      

<Tab.Screen
    name="Settings"
    component={SettingScreen}
    options={{
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="settings" size={size} color={color} />
      ),
    }}
    />





    
    </Tab.Navigator>
  );
}