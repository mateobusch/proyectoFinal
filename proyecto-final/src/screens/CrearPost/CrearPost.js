import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { db, auth } from "../../firebase/config";

export default function NuevoPost({ navigation }) {
  const [descripcionPost, setDescripcionPost] = useState('');
  const [error, setError] = useState('');

  const onSubmit = () => {
    if (descripcionPost === '') {
      setError('El post no puede estar vacío');
      return;
    }

    db.collection("posts").add({
      email: auth.currentUser.email,
      descripcionPost: descripcionPost,
      owner: auth.currentUser.uid,
      createdAt: Date.now()
    })
    .then(() => {
      setDescripcionPost('');
      navigation.navigate("Home");
    })
    .catch((error) => {
      setError("Error al publicar");
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Qué querés publicar"
        value={descripcionPost}
        onChangeText={(text) => setDescripcionPost(text)}
        multiline={true}
      />

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Publicar</Text>
      </Pressable>

      {error !== '' && <Text>{error}</Text>}
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
    height: 80,
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