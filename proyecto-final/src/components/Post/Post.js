import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { auth, db } from '../../firebase/config';
import firebase from 'firebase';

export default function Post(props) {
  const likePost = () => {
    const uid = auth.currentUser.uid;

    let likes = props.data.likes || [];

    if (likes.includes(uid)){
      
      db.collection('posts')
      .doc(props.id)
      .update({
        likes: firebase.firestore.FieldValue.arrayRemove(uid)
      })
      .catch(err => console.log('Error al dar like: ', err))
    }
    else{
      db.collection('posts')
      .doc(props.id)
      .update({
        likes: firebase.firestore.FieldValue.arrayUnion(uid)
      })
      .catch(err => console.log('Error al dar like: ', err))
    }

    
    
  }

  return (
   

    
          <View style={styles.card}>
            <Text style={styles.ownerText}>Email: {props.data.email}</Text>
            <Text style={styles.descriptionText}>Post: {props.data.descripcionPost}</Text>

            <Text style={styles.likesCount}>{(props.data.likes || []).length} Likes </Text>

            <View style={styles.buttonContainer}>

            <Pressable style= {styles.buttonComment} onPress={() =>
              props.navigation.navigate('Comentarios', {posteoId: props.id})}>
              <Text style={styles.buttonText}>Comentar</Text>
            </Pressable>
             
             <Pressable style= {styles.buttonLike} onPress= {likePost}>
              <Text style={styles.buttonText}>Me gusta</Text>
             </Pressable>

             </View>
          </View>
      
    
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 14,
    backgroundColor: '#ffffff',
  },
  ownerText: {
    fontSize: 13,
    color: '#4b5563',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 17,
    color: '#111827',
    marginBottom: 12,
  },
  likesCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  buttonLike: {
    backgroundColor: '#ff0447',
    height: 40,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonComment: {
    backgroundColor: '#28a745',
    height: 40,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});