import { View, Text, Image } from 'react-native'
import React from 'react'


export default function Header() {
    const userName = undefined; // Este está porque como no hay un usuario logueado, no hay nombre.
    const displayName = userName || "Usuario"; // Valor predeterminado

    return (
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
      }}>
        <View>
          <Text style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 18,
          }}>
            ¡Bienvenido,
          </Text>
          <Text style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 25,
          }}>
            {userName}!
          </Text>
        </View>
        <Image 
          source={require('./../../assets/images/profile.jpg')} 
          style={{
            width: 40, 
            height: 40, 
            borderRadius: 99, 

          }} 
        />
      </View>
    );
  }