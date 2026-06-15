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
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  ownerText: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  likesCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  buttonLike: {
    backgroundColor: '#ff0447',
    height: 38,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonComment: {
    backgroundColor: '#28a745',
    height: 38,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});