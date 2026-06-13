import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
import { db, auth } from '../../firebase/config';

export default function Comentarios(props) {

  const posteoId = props.route.params.posteoId;
  const [ comentarioCrear , setComentarioCrear ] = useState('')
  const [ comentariosTodos , setComentariosTodos ] = useState([])
  const [error, setError] = useState('');

  const comentar = () => {

    if (comentarioCrear === '') {
      setError('El comentario no puede estar vacío');
      return;
    }

    db.collection('comentarios').add({
      owner: auth.currentUser.email,
      createdAt: Date.now() ,
      posteoId: posteoId,
      comentario: comentarioCrear
    });
    setComentarioCrear('')
    setError('');
  }

  useEffect(() => {
    db.collection('comentarios').onSnapshot((docs) => {

      let comentarios = [];
      docs.forEach((doc) => {
        if (doc.data().posteoId === posteoId){
          comentarios.push({
            id: doc.id,
            data: doc.data()
          })
        }
      })
      setComentariosTodos(comentarios)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comentarios</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Qué querés comentar"
        value={comentarioCrear}
        onChangeText={(text) => setComentarioCrear(text)}
      />
      <Text style={styles.error}>{error}</Text>
      <Pressable style={styles.button} onPress={comentar}>
        <Text style={styles.textoButton}>Comentar</Text>
      </Pressable>
      
      <FlatList
        data={comentariosTodos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>(
          <View style={styles.comentarioContainer}>
            <Text style={styles.usuario}>{item.data.owner}</Text>
            <Text style={styles.texto}>{item.data.comentario}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#28a745',
    marginBottom: 15,
  },
  textoButton: {
    color: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  comentarioContainer: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 10,
  },
  usuario: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
  },
});