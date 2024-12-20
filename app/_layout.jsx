import { Stack } from "expo-router";
import { useFonts } from 'expo-font';


export default function RootLayout() {

  useFonts ({
    'Montserrat-Bold': require('./../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
  })

  return (

    <Stack>
      <Stack.Screen name="index" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="(tabs)" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="home/webview" options={{ headerShown: false }} />

    </Stack>
  );
}