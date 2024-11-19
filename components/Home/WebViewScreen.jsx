import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native'; // Usamos useRoute aquí

export default function WebViewScreen() {
  const route = useRoute(); // Usamos useRoute para acceder a los parámetros
  const { url } = route.params; // Accedemos a los parámetros con route.params

  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
