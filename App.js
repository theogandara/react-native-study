import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>MFA</Text>
      <View style={styles.form}>
        <View style={styles.containerInput}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Insira seu email"
            placeholderTextColor="#555"
            style={styles.input}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="Insira sua senha"
            placeholderTextColor="#555"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.flex}>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#121012',
    flex: 1,
    padding: 200,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    padding: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: '#000',
    fontSize: 24,
    alignSelf: 'center',
  },
  button: {
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  flex: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    padding: 20,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    marginTop: 10,
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
  },
  containerInput: {
    marginTop: 25,
  },
  form: {
    padding: 10,
  },
});

export default App;
