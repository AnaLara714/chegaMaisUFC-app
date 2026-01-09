import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface StatusAtualProps {
  ocupacaoPercentual: number;
  vagasDisponiveis: number;
  totalVagas: number;
  statusLabel?: string; // ex: "Baixa", "Média", "Alta"
}

export default function StatusAtual({
  ocupacaoPercentual,
  vagasDisponiveis,
  totalVagas,
  statusLabel = "Baixa",
}: StatusAtualProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Status Atual</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{statusLabel}</Text>
        </View>
      </View>

      <Text style={styles.percent}>{ocupacaoPercentual}%</Text>
      <Text style={styles.subtitle}>Ocupação Atual</Text>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            { width: `${ocupacaoPercentual}%` },
          ]}
        />
      </View>

      <Text style={styles.vagas}>
        {vagasDisponiveis} vagas disponíveis de {totalVagas}
      </Text>
    </View>
  );
}
