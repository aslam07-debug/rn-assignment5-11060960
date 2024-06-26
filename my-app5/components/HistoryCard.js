import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HistoryCard = ({ historyIcon, title, type, amount }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
       <Image source={historyIcon} style={styles.icon} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <Text style={[styles.amount,{right:44}]}>{amount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom:10
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey', 
    width: 48,   
    height: 48, 
    borderRadius: 24,
    marginRight: 10
  },
  icon: {
    width: 24,
    height: 24, 
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    color: 'black',
    fontSize: 12,
  },
  amount: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default HistoryCard;
