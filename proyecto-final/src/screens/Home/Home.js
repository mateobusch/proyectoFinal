import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { db } from '../../firebase/config';
import Post from "../../components/Post/Post"

export default function Home({navigation}) {

const[listaPosteos, setListaPosteos] = useState([])

useEffect(()=>{
  db.collection('posts')
  .orderBy('createdAt', 'desc')
  .onSnapshot((onSnapshot) => {
    let postsAux = []
    snapshot.forEach((doc) => {
          postsAux.push({
            id: doc.id,         
            data: doc.data()   
          });
        });

       
        setListaPosteos(postsAux);
      });
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Home</Text>
      <Text>Bienvenido a la aplicación</Text>

      <Post/>
      
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
    fontSize: 26,
    fontWeight: 'bold',
  },
});