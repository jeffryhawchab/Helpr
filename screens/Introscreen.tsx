import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';


const IntroScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/json/animation.json')} // Path to your Lottie file
        autoPlay
        loop
        style={styles.lottieAnimation}
      />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to Helpr</Text>
      <Text style={styles.subtitle}>
        Your personal guide for managing ADHD-related tasks easily and efficiently.
      </Text>

      {/* Sign-In Button */}
      <TouchableOpacity
        style={styles.signInButton}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign-Up Button */}
      <TouchableOpacity
        style={styles.signUpButton}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Light background
  },
  lottieAnimation: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  signInButton: {
    backgroundColor: '#ff8c00',  // Orange color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#00bfff',  // Light blue color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
