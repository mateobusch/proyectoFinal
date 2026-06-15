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
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Bienvenido a Quick Snap</Text>

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
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 24,
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    marginBottom: 18,
  },
  flatlist: {
    flex: 1,
    width: '100%',
  },
});;