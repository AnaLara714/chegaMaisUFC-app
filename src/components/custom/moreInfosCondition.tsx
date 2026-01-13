import { conditionStyles } from "@/src/styles/moreInfoCondition";
import { Feather, FontAwesome5 } from "@expo/vector-icons"; // Importando ícones
import React from "react";
import { Text, View } from "react-native";

interface CondicoesAmbienteProps {
  temperatura?: number;
  wifiDisponivel?: string
  ultimaLeituraTemperatura?: string;
}

export default function MoreInfoCondition({
  temperatura,
  wifiDisponivel,
  ultimaLeituraTemperatura
}: CondicoesAmbienteProps) {
  return (
    <View style={conditionStyles.container}>
      <Text style={conditionStyles.title}>Condições do Ambiente</Text>

      <View style={conditionStyles.card}>
        <View style={conditionStyles.iconBox}>
          <FontAwesome5 name="thermometer-three-quarters" size={20} color="#0055FF" />
        </View>
        <View style={conditionStyles.textContainer}>
          <Text style={conditionStyles.label}>Temperatura</Text>
          <Text style={conditionStyles.value}>{temperatura}°C</Text>
        </View>
      </View>

      <View style={conditionStyles.card}>
        <View style={conditionStyles.iconBox}>
          <Feather name="wifi" size={20} color="#0055FF" />
        </View>
        <View style={conditionStyles.textContainer}>
          <Text style={conditionStyles.label}>Status Wi-Fi</Text>
          <Text style={conditionStyles.value}>
            {wifiDisponivel}
          </Text>
        </View>
      </View>
      <Text style={conditionStyles.label}>Última leitura: {ultimaLeituraTemperatura || "-"}</Text>
    </View>
  );
}