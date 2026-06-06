import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Post from "../../components/Post/Post"

export default function Home() {
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