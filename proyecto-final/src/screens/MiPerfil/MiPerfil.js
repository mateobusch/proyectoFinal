import React, {useEffect, useState} from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import {auth, db} from '../../firebase/config'
import Post from '../../components/Post/Post'

export default function Profile({ navigation }) {

  const [misPosteos, setMisPosteos] = useState([])

  useEffect(() => {
    if (!auth.currentUser) return

    db.collection('posts')
      .where('owner', '==', auth.currentUser.email)
      .onSnapshot((snapshot) => {
        let postsAux = []
        snapshot.forEach((doc)=> {
          postsAux.push({
            id: doc.id,
            data: doc.data()
          })
        })

        postsAux.sort((a, b)=> b.data.createdAt - a.data.createdAt)

        setMisPosteos(postsAux)
      })
  }, [])

const handleLogout = () => {
  auth.signOut()
  .then(() => {
    navigation.navigate('Login')
  })

  .catch((error) => {
    console.log('Error al intentar desloguearse:', error)
  })
}

  return (
    <View style={styles.container}>
      <View style={styles.headerPerfil}>

        <Text style={styles.title}>Mi Perfil</Text>
        <Text style={infoText}>
          <Text style={styles.boldText}>Email: </Text>{auth.currentUser?.email}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Total de publicaciones: </Text>{misPosteos.length}
        </Text>

        <Pressable style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Mis Posteos</Text>

      <FlatList
        data={misPosteos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Post id={item.id} data={item.data} navigation={navigation} />
        )}
        style={styles.flatlist}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Todavía no realizaste ninguna publicación.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerPerfil: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#444',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#FF3B30',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  flatlist: {
    flex: 1,
    width: '100%',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 30,
    fontSize: 14,
    fontStyle: 'italic',
  },
});