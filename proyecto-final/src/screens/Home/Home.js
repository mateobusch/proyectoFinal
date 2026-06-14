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

      onSnapshot.forEach((doc) => {
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
      <Text style={styles.subtitle}>Bienvenido a la aplicación</Text>

      <FlatList
      data={listaPosteos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <Post
        id={item.id}
        data={item.data}
        navigation = {navigation}
        />
      )}
      style = {styles.flatlist}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  flatlist: {
    flex: 1,
    width: '100%',
  },
});;