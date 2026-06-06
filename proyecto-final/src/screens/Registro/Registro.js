import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import {db, auth} from "../../firebase/config"

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((response) => {
      db.collection("users").add({
      email: email,
      username: username,
      owner: response.user.uid,
      createdAt: Date.now()
  })
  .then(()=>{
    navigation.navigate("Login");
  })
      
    })
    .catch((error) => {
      setError("Error en el registro")
    });
  };

  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresá tu email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresá tu usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresá tu contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Registrate</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Ya tengo cuenta</Text>
      </Pressable>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 50,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#28a745',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  link: {
    marginTop: 20,
    color: '#007AFF',
    textAlign: 'center',
  },
  preview: {
    marginTop: 30,
  },
});