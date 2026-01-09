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

      <View style={styles.card}>
        <Text style={styles.label}>Temperatura</Text>
        <Text style={styles.value}>{temperatura}°C</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Status Wi-Fi</Text>
        <Text style={styles.value}>
          {wifiDisponivel ? "Conexão Disponível" : "Indisponível"}
        </Text>
      </View>
    </View>
  );
}
