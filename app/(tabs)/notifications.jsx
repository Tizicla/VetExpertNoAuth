import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MessageHeader from '../../components/Notifications/HeaderNotifications';
import MessageItem from '../../components/Notifications/ItemNotifications';
import Colors from '../../constants/Colors';

export default function Notifications() {
  const messages = [
    {
      id: '1',
      name: 'Juan Dorantes Cortés',
      date: '11 jul 2022',
      message: 'Hola, aquí tienes los detalles de tu v...',
      image: require('./../../assets/images/veterinario.png'),
    },
    {
      id: '2',
      name: 'Ana López Hernández',
      date: '12 jul 2022',
      message: 'Gracias por contactarnos, te esperam...',
      image: require('./../../assets/images/veterinario.png'),
    },
    // Agrega más mensajes aquí si quieres
  ];

  return (
    <View style={styles.screen}>
      <MessageHeader />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem {...item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, // Asegura que ocupe toda la pantalla
    backgroundColor: Colors.background, // Aplica el color de fondo
    padding: 20, // Espaciado general
    marginHorizontal: 5,
  },

});
