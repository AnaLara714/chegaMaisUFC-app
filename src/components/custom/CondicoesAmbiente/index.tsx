import { Feather, FontAwesome5 } from "@expo/vector-icons"; // Importando ícones
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface CondicoesAmbienteProps {
  temperatura: number;
  wifiDisponivel: boolean;
}

export default function CondicoesAmbiente({
  temperatura,
  wifiDisponivel,
}: CondicoesAmbienteProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Condições do Ambiente</Text>

      {/* Card Temperatura */}
      <View style={styles.card}>
        <View style={styles.iconBox}>
          <FontAwesome5 name="thermometer-three-quarters" size={20} color="#0055FF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Temperatura</Text>
          <Text style={styles.value}>{temperatura}°C</Text>
        </View>
      </View>

      {/* Card Wi-Fi */}
      <View style={styles.card}>
        <View style={styles.iconBox}>
          <Feather name="wifi" size={20} color="#0055FF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Status Wi-Fi</Text>
          <Text style={styles.value}>
            {wifiDisponivel ? "Conexão Disponível" : "Indisponível"}
          </Text>
        </View>
      </View>
    </View>
  );
}