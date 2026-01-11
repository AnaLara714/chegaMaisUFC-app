import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface StatusAtualProps {
  ocupacaoPercentual: number;
  vagasDisponiveis: number;
  totalVagas: number;
  statusLabel?: string; 
}

export default function StatusAtual({
  ocupacaoPercentual,
  vagasDisponiveis,
  totalVagas,
  statusLabel = "Baixa",
}: StatusAtualProps) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Status Atual</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{statusLabel}</Text>
        </View>
      </View>

      {/* Porcentagem Centralizada */}
      <Text style={styles.percent}>{ocupacaoPercentual}%</Text>
      <Text style={styles.subtitle}>Ocupação Atual</Text>

      {/* Barra de Progresso */}
      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            { width: `${ocupacaoPercentual}%` },
          ]}
        />
      </View>

      {/* Rodapé com Ícone */}
      <View style={styles.footerContainer}>
        <Feather name="users" size={18} color="#9CA3AF" style={{ marginRight: 6 }} />
        <Text style={styles.vagas}>
          {vagasDisponiveis} Vagas Disponíveis de {totalVagas}
        </Text>
      </View>
    </View>
  );
}