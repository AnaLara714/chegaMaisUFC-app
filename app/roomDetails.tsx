import { useRooms } from "@/src/contexts/roomContext";
import { globalStyles } from "@/src/styles/global";
import { headerStyle } from "@/src/styles/header";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function RoomDetails() {
  const { infoRoom } = useRooms();
  const [agora, setAgora] = useState(Date.now());

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
          <Text>Voltar</Text>
        </Link>
        <Text style={headerStyle.title}>{infoRoom?.nome} </Text>
      </View>
      <View>
        <Text> Porcentagem de ocupacao {infoRoom?.ocupacaoPercent} </Text>
        <Text> Ocupacao Atual {infoRoom?.ocupacaoAtual} </Text>
        <Text> Vagas {infoRoom?.vagas} </Text>
        <Text> Vagas disponiveis {vagasDisponiveis} </Text>
        <Text> Temperatura {infoSensor?.temperatura?.valor} </Text>
        <Text>
          {" "}
          Última Temperatura{" "}
          {formatarLeitura(infoSensor?.temperatura?.timestamp)}{" "}
        </Text>
        <Text> Wifi {infoSensor?.wifi?.valor} </Text>
        <Text>
          {" "}
          Última Temperatura {formatarLeitura(infoSensor?.wifi?.timestamp)}{" "}
        </Text>
        <Text>
          Status da Internet:{" "}
          {verificarWifi(infoSensor?.wifi?.timestamp)
            ? "Sem sinal Wifi"
            : "Wifi Ativo"}
        </Text>
      </View>
    </View>
  );
}
