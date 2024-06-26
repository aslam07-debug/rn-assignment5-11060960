// ThemeSwitch.js
import React from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext'; // Ensure correct import path

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Theme</Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default ThemeSwitch;
