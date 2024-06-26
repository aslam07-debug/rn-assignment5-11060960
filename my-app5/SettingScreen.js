import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Button, FlatList} from 'react-native';
import SettingList from './SettingList';
export default function SettingScreen(){

  return(
<View style={styles.container}>
<Text style={{marginLeft:'auto',marginRight:'auto',fontWeight:'bold',fontSize:28}}>Settings </Text>
<SettingList title="Language" />
<SettingList title="My Profile" />
<SettingList title="Contact Us" />
<SettingList title="Change password" />

<SettingList title="Privacy Policy" />

</View>
  );
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