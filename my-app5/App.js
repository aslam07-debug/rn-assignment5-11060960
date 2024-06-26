
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Button, FlatList} from 'react-native';
import HomeScreen from './HomeScreen';
import IconButton from './components/IconButton';
import HistoryCard from './components/HistoryCard';
import { Hometab } from './Hometab';

export default function App() {
  const Stack = createStackNavigator(); 
  const buttons=[
    {id:'1', details:require('./assets/send.png'),label:'Send'},
    {id:'2', details:require('./assets/recieve.png'),label:'receive'},
    {id:'3', details:require('./assets/loan.png'),label:'Loan'},
    {id:'4', details:require('./assets/topUp.png'),label:'Topup'}

  ]
  const activitiesData = [
    { id: '1', icon: require('./assets/apple.png'), title: 'Apple Store', type: 'Entertainment', amount: '-$5,99' },
    { id: '2', icon: require('./assets/spotify.png'), title: 'Food', type: 'Music', amount: '-$12,99' },
    { id: '3', icon: require('./assets/moneyTransfer.png'), title: 'Money Transfer', type: 'Transaction', amount: '$300' },
    { id: '4', icon: require('./assets/grocery.png'), title: 'grocery', type: 'Shop', amount: '-$88' },
    
    
  ];

  return (
    <NavigationContainer>
   <Stack.Navigator >
   <Stack.Screen  
   name=' '
   component={Hometab}
  
   />


   </Stack.Navigator>
</NavigationContainer>
  );
}

