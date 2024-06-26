import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Button, FlatList} from 'react-native';
import IconButton from './components/IconButton';
import HistoryCard from './components/HistoryCard';


export default function HomeScreen(){
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
return(
<View style={styles.container}>
<View style={{top:10,display:'flex',left:30,flexDirection:'row',height:60}}>
       <Image source={require('./assets/profile.png')}  style={{width:60,height:60}}/>
       <View style={{display:'flex',flexDirection:'column',left:30}}>
         <Text style={{color:'grey',fontSize:15}}>Welcome back,</Text>
        <Text  style={{top:8,fontWeight:'bold',fontSize:20}} >Aslam</Text>
     </View>
  <Image source={require('./assets/search.png')} style={{position:'absolute',right:83,top:15,height:30,width:30,}}/>

  <View style={{width:60,height:60,backgroundColor:'grey',borderRadius:30,position:'relative',zIndex:-1,left:110}}/>
</View>

<View style={{top:45,marginLeft:'auto',marginRight:'auto'}}>
<Image source={require('./assets/Card.png')} />

</View>
<View style={[styles.buttonRow,{top:40,margin:'auto'}]}>
  {buttons.map(
    button=>
      <IconButton
      key={button.id}
      buttonIcon={button.details}
      buttonText={button.label}
      />
    
  )}
</View>
 <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between',bottom:-50}}>
  <Text style={{left:35,fontWeight:'bold',fontSize:18}}>Transaction</Text>
  <Text style={{right:35,fontWeight:'bold',color:'blue',fontSize:18}}>Sell All</Text>
 </View>
 
 <FlatList 
 
 data={activitiesData}
 renderItem={({item})=>
  <HistoryCard 
  historyIcon={item.icon}
  title={item.title}
  type={item.type}
  amount={item.amount}
  
  />

 }
 keyExtractor={(item)=>item.id}
 style={{top:60,left:30,}}
 />
 


  <StatusBar style="auto" />
</View>


)


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width: 340, 
    alignItems: 'center',
    marginTop: 20
  }
});
