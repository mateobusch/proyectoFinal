import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { db } from '../../firebase/config';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .onSnapshot((docs) => {
        let postsArray = [];

        docs.forEach((doc) => {
          postsArray.push({
            id: doc.id,
            data: doc.data()
          });
        });

        setPosts(postsArray);
        console.log(postsArray);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Publicaciones</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Email: {item.data.email}</Text>
            <Text>Post: {item.data.descripcionPost}</Text>
            <Pressable onPress={() =>
              props.navigation.navigate('StackSecundaria', {
              posteoId: item.id, screen: 'Comentarios'
            })}>
              <Text>Comentar</Text>
            </Pressable>
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
  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 10,
  },
});