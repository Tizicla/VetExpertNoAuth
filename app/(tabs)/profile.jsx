import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Fav from '../../components/Profile/Fav'
import Header from '../../components/Profile/Header'


export default function Profile() {
  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
        <View style ={{
          padding:20,
          backgroundColor: Colors.background,
          marginTop:20,
          marginHorizontal: 5,
      }}
    >
      {/*Header*/}
      <Header/>
      {/*Fav*/}
      <Fav/>
    </View>
  </ScrollView>
  )
}
