import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import {auth} from "../firebase/config"

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const onSubmit = () => {
    setError("");

    if (!email.includes("@")){
      setError("Email mal formateado");
      return;
    }
    if (email === '' || password === ''){
      setError("Todos los campos son obligatorios");
      return;
    }
    auth.signInWithEmailAndPassword(email, password)
        .then((response) => {

          setEmail('')
          setPassword('')
            navigation.navigate("NavegacionTab");
        })
        .catch((err) => {
            setErr(err.message);
        });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresá tu email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresá tu contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {error !== "" && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Ir al registro</Text>
      </Pressable>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                          
    flexDirection: 'column',          
    justifyContent: 'center',         
    paddingLeft: 15,                 
    paddingRight: 15,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    paddingTop: 10,                   
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1,                   
    borderColor: '#ccc',
    borderRadius: 6,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#28a745',
    height: 48,                       
    justifyContent: 'center',         
    alignItems: 'center',             
    borderRadius: 4,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 25,
    color: '#007AFF',
    textAlign: 'center',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: '500',
  }
})