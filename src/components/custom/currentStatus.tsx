import { currentStatusStyles } from "@/src/styles/currentStatus";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";


interface StatusAtualProps {
  ocupacaoPercentual: number | undefined;
  vagasDisponiveis?: number;
  totalVagas?: number;
  statusLabel?: number; 
}

export default function CurrentStatus({
  ocupacaoPercentual,
  vagasDisponiveis,
  totalVagas,
  statusLabel
}: StatusAtualProps) {
  const getOcupacaoStatus = (percent = 0) => {
  if (percent <= 40) {
    return { label: "Baixa", color: "#22C55E", badge: "#D1FAE5" };
  }
  if (percent <= 70) {
    return { label: "Média", color: "#F59E0B", badge: "#FEF3C7" };
  }
  return { label: "Alta", color: "#EF4444", badge: "#FEE2E2" };
};

  const ocupacao = getOcupacaoStatus(ocupacaoPercentual);

  return (
    <View style={currentStatusStyles.container}>
      <View style={currentStatusStyles.header}>
        <Text style={currentStatusStyles.title}>Status Atual</Text>
        <Text style={[
            currentStatusStyles.statusBadge,
            { backgroundColor: ocupacao.badge, color: ocupacao.color },
        ]}>
            {ocupacao.label}
        </Text>
      </View>

      <Text style={[currentStatusStyles.percent,  
        { color: ocupacao.color }]}>{ocupacaoPercentual}%</Text>
      <Text style={currentStatusStyles.subtitle}>Ocupação Atual</Text>

      <View style={currentStatusStyles.progressBackground}>
        <View
          style={[
            currentStatusStyles.progressFill,
            { width: `${ocupacaoPercentual ?? 0}%`, backgroundColor: ocupacao.color },
          ]}
        />
      </View>

      <View style={currentStatusStyles.footerContainer}>
        <Feather name="users" size={18} color="#9CA3AF" style={{ marginRight: 6 }} />
        <Text style={currentStatusStyles.vagas}>
          {vagasDisponiveis} Vagas Disponíveis de {totalVagas}
        </Text>
      </View>
    </View>
  );
}