import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { auth, db } from '../../firebase/config';

export default function Post(props) {
  const likePost = () => {
    const uid = auth.currentUser.uid;

    let likes = props.data.likes || [];

    if (likes.includes(uid)){
      likes = likes.filter(id => id !== uid)
      
    }
    else{
      likes.push(uid)
    }

    db.collection("posts")
    .doc(props.id)
    .update({
      likes: likes
    })
    
  }

  return (
   

    
          <View style={styles.card}>
            <Text>Email: {props.data.email}</Text>
            <Text>Post: {props.data.descripcionPost}</Text>
            <Pressable onPress={() =>
              props.navigation.navigate('StackSecundaria', {
              posteoId: props.id, screen: 'Comentarios'
            })}>
              <Text>Comentar</Text>
            </Pressable>
             <Text>{(props.data.likes || []).length} Likes </Text>
             <Pressable onPress= {likePost}>
              <Text>Me gusta</Text>
             </Pressable>
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