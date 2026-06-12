import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { db, auth } from '../../firebase/config';

export default function Comentarios(props) {

  const posteoId = props.route.params.posteoId;
  [ comentarioCrear , setComentarioCrear ] = useState('')
  [ comentariosTodos , setComentariosTodos ] = useState([])

  useEffect(() => {
    db.collection('comentarios').add({
      owner: auth.currentUser.email,
      createdAt: Date.now() ,
      posteoId: posteoId,
      comentario: comentarioCrear
    });
    setComentarioCrear('')
  }
  )
  return (
    <Text>Comentarios</Text>
  );
}