import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-ionicons';

export default function SettingList({title}){

  return(

<View style={{marginLeft:'auto',marginRight:'auto',height:80,width:350,borderBottomWidth:1,borderBottomColor:'grey',top:20,marginBottom:10}}>
<Text style={{margin:'auto',left:-100,fontSize:20,top:20,marginLeft:100}}>{title} </Text>
<Text style={{left:300,top:-20}}>
<Ionicons name='chevron-forward' size={40} color='gray' />
</Text>
</View>

  )
}