import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import HeaderTabs from '../../components/Dates/HeaderTabs';
import DatesCard from '../../components/Dates/DatesCard';
import Colors from '../../constants/Colors'


export default function Dates() {
  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style ={{
          padding:20,
          backgroundColor: Colors.background,
          marginTop:20,
          marginHorizontal: 5,
        }}
      >
        <Text style={styles.title}>Citas</Text>
        <HeaderTabs />
        <DatesCard />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 20,
  },
});

