import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Add a spinner */}
      <ActivityIndicator size="large" color="#ff8c00" />
      
      {/* Display a loading message */}
      <Text style={styles.loadingText}>Loading, please wait...</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Take up the whole screen
    justifyContent: 'center',  // Center the content vertically
    alignItems: 'center',      // Center the content horizontally
    backgroundColor: '#fff',   // Set background color (can be customized)
  },
  loadingText: {
    marginTop: 20,            // Space between spinner and text
    fontSize: 18,             // Font size of the text
    color: '#333',            // Text color (can be customized)
  },
});
