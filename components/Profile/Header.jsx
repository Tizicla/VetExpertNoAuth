import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

export default function Header() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Perfil</Text>
    <Image source={require('./../../assets/images/profile.jpg')} style={{width: 70, height: 70, borderRadius: 50, marginBottom: 20, marginLeft: 130}} />
    <Text style={styles.nameuser}>Usuario</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 30,
  }, 
  nameuser: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 20,
    marginLeft: 130,
    marginTop: -10,
  }
});