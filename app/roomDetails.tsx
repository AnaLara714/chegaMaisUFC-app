import CurrentStatus from "@/src/components/custom/currentStatus";
import MoreInfoCondition from "@/src/components/custom/moreInfosCondition";
import { useRooms } from "@/src/contexts/roomContext";
import { globalStyles } from "@/src/styles/global";
import { headerStyle } from "@/src/styles/header";
import { Feather } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function RoomDetails() {
   const { id } = useLocalSearchParams();

  const { infoRoom, fetchInfoRoom } = useRooms();
  const [agora, setAgora] = useState(Date.now());

  useEffect(() => {
    fetchInfoRoom(Number(id));
  }, [id]);

  const infoSensor = infoRoom?.ultimas;

  let vagasDisponiveis;

  if (infoRoom && infoRoom.ocupacaoAtual !== undefined)
    vagasDisponiveis = infoRoom?.vagas - infoRoom?.ocupacaoAtual;

  useEffect(() => {
    const interval = setInterval(() => {
      setAgora(Date.now());
    }, 2400000);

    return () => clearInterval(interval);
  }, []);

  const verificarWifi = (timestamp?: string) => {
    if (!timestamp) return true;

    const ultimaLeitura = new Date(timestamp).getTime();

    const diffEmMs = agora - ultimaLeitura;

    return diffEmMs > 10 * 60 * 1000; // 10 minutos
  };

  const formatarLeitura = (timestamp?: string) => {
    if (!timestamp) return;

    let data = new Date(timestamp);

    const hora = data.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const dataStr = data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return `${hora} ${dataStr}`;
  };

  return (
    <View style={globalStyles.container}>
      <View style={headerStyle.container}>
        <Link href="/" style={headerStyle.goBack}>
          <Feather name="arrow-left" size={22} color="#FFFFFF" />
          <Text style={globalStyles.backText}>Voltar</Text>
        </Link>
        <Text style={headerStyle.title}>{infoRoom?.nome} </Text>
      </View>
      <ScrollView style={globalStyles.scroll}>
        <View style={globalStyles.container}>

        <CurrentStatus
          ocupacaoPercentual={infoRoom?.ocupacaoPercent}
          vagasDisponiveis={vagasDisponiveis}
          totalVagas={infoRoom?.vagas}
          statusLabel={infoRoom?.ocupacaoPercent}
        />

        <MoreInfoCondition 
          temperatura={infoSensor?.temperatura?.valor}
          ultimaLeituraTemperatura={formatarLeitura(infoSensor?.temperatura?.timestamp)}
          wifiDisponivel={verificarWifi(infoSensor?.temperatura?.timestamp)
            ? "Conexão Indisponível"
            : "Conexão Disponível"}
        />
        </View>
      </ScrollView>
    </View>
  );
}

