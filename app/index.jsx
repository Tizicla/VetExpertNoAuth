import React from "react";
import { useRouter } from "expo-router"; // Importa el hook useRouter
import { Text, View, Image, Pressable } from "react-native";
import Colors from '../constants/Colors';

export default function Index() {
  const router = useRouter(); // Hook para manejar la navegación

  return (
    <View
      style={{
        backgroundColor: Colors.background,
        height: "100%",
      }}
    >
      <Image
        source={require("../assets/images/LogoSolo.png")}
        style={{
          width: "100%",
          height: 500,
        }}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat-Bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          ¡Bienvenido a Vet Expert!
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-Regular",
            fontSize: 18,
            textAlign: "center",
            color: Colors.text,
          }}
        >
          Únete a nosotros para brindar a tus mascotas el cuidado que merecen.
        </Text>

        {/* Botón reemplazando el Link */}
        <Pressable
          onPress={() => router.push("/(tabs)/home")} // Navega a la ruta deseada
          style={{
            padding: 14,
            marginTop: 40,
            backgroundColor: Colors.primary,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              fontSize: 20,
              color: "#fff",
            }}
          >
            Empezar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
