/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View styles={styles.viewStyles}>
        <Text style={styles.title}>MFA</Text>
      </View>

      <ScrollView contentInsetAdjustmentBehavior="automatic" />
      <View styles={styles.flex}>
        <TouchableOpacity
          onPress={() => setModalIsOpen(true)}
          style={styles.buttonStyles}>
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalIsOpen(true)}
          style={styles.buttonStyles}>
          <Text style={styles.textStyle}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
    textAlign: 'center',
  },
  flex: {
    display: 'flex',
    width: 100,
    height: 50,
    backgroundColor: '#808080',
  },
  buttonStyles: {
    backgroundColor: '#000',
    textAlign: 'center',
    marginLeft: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    marginTop: 10,
    borderRadius: 50,
    borderColor: '#000',
  },
  contentStyles: {
    marginTop: 10,
  },
});

export default App;
