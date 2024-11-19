import { View, FlatList, Dimensions, StyleSheet, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/FirebaseConfig';

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);
  const router = useRouter(); // Para navegar entre pantallas

  useEffect(() => {
    GetSliders();
  }, []);

  const GetSliders = async () => {
    setSliderList([]);
    const snapshot = await getDocs(collection(db, 'sliders'));
    snapshot.forEach((doc) => {
      setSliderList(sliderList => [...sliderList, doc.data()]);
    });
  };

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/home/webview?url=${encodeURIComponent(item?.pageUrl)}`)}>
            <Image source={{ uri: item?.imageUrl }} style={styles.sliderImage} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderImage: {
    width: Dimensions.get('screen').width * 0.7,
    height: 170,
    borderRadius: 15,
    marginRight: 15,
  },
});
