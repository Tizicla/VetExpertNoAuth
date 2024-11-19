import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Fav() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.subtitle}>Tus favoritos</Text>
      <View style={styles.container}>
        {/* Imagen y texto en el centro */}
        <View style={styles.centerContent}>
        <Text style={styles.title}>Aún no tienes favoritos</Text>
          <Image 
            source={require('./../../assets/images/buscar.png')} 
            style={styles.image} 
          />
          
        </View>

        {/* Descripción y botón */}
        <Text style={styles.description}>
          Busca y guarda a tus veterinarios favoritos para facilitar futuras consultas y revisiones. Guárdalos haciendo clic en el ícono 💚.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Guardar especialistas →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra para Android
    
  },
  centerContent: {
    alignItems: 'center', // Centrar texto e imagen verticalmente
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
      },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
   
    
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#00796b',
    fontWeight: 'bold',
  },
  image: {
    width: 80, // Tamaño grande para destacar
    height: 80,
    borderRadius: 20, // Forma redonda
  },
});
