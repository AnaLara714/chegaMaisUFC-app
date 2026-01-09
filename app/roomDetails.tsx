import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";


import CondicoesAmbiente from "../src/components/custom/CondicoesAmbiente";
import StatusAtual from "../src/components/custom/StatusAtual";
import { styles } from "../src/styles/roomDetails";

export default function RoomDetails() {
  const { sala } = useLocalSearchParams();
  const router = useRouter();

  // DADOS DE EXEMPLO
  const dadosDaSala = {
    vagasTotais: 40,
    vagasOcupadas: 12,
    temperatura: 23,
    wifi: true,
  };

  const vagasDisponiveis = dadosDaSala.vagasTotais - dadosDaSala.vagasOcupadas;
  const ocupacaoPercentual = Math.round((dadosDaSala.vagasOcupadas / dadosDaSala.vagasTotais) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#FFF" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{sala || "Detalhes da Sala"}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <StatusAtual
          ocupacaoPercentual={ocupacaoPercentual}
          vagasDisponiveis={vagasDisponiveis}
          totalVagas={dadosDaSala.vagasTotais}
          statusLabel={ocupacaoPercentual > 80 ? "Alta" : "Baixa"}
        />

        <CondicoesAmbiente
          temperatura={dadosDaSala.temperatura}
          wifiDisponivel={dadosDaSala.wifi}
        />

      </ScrollView>
    </View>
  );
}