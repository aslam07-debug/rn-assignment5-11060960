import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const IconButton = ({ buttonIcon, buttonText }) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Image source={buttonIcon} style={styles.icon} />
    </TouchableOpacity>
    <Text style={styles.text}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 53,
    marginHorizontal: 5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey', 
    width: 50,   
    height: 50, 
    borderRadius: 25,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    marginTop: 5,
  }
});

export default IconButton;
