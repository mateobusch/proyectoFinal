import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import {auth} from "../../firebase/config"

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const onSubmit = () => {
    setError("");

    if (!email.includes("@")){
      setError("Email inexistente");
      return;
    }
    if (password.length < 6){
      setError("La contraseña debe tener una longitud mínima de 6 caracteres");
      return;
    }
    auth.signInWithEmailAndPassword(email, password)
        .then((response) => {
            navigation.navigate("HomeMenu");
        })
        .catch((error) => {
            setError("Credenciales incorrectas");
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

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Ir al registro</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('HomeMenu')}>
        <Text style={styles.link}>Entrar en la app</Text>
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