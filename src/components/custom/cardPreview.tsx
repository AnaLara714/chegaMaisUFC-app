import { useRooms } from "@/src/contexts/roomContext";
import { cardStyles } from "@/src/styles/card";
import { AntDesign, FontAwesome6, SimpleLineIcons } from "@expo/vector-icons/";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type Props = {
  id: number;
  sala: string;
  ocupacaoPercent?: number;
  temperatura?: number;
  wifi?: number;
  internet?: number;
};

export default function CardPreview({
  id,
  sala,
  ocupacaoPercent,
  temperatura,
  wifi,
}: Props) {
  const { fetchInfoRoom, infoRoom} = useRooms();
  const [agora, setAgora] = useState(Date.now());

  const getOcupacaoStatus = (percent = 0) => {
    if (percent <= 40) {
      return { label: "Baixa", color: "#22C55E", badge: "#D1FAE5" };
    }
    if (percent <= 70) {
      return { label: "Média", color: "#F59E0B", badge: "#FEF3C7" };
    }
    return { label: "Alta", color: "#EF4444", badge: "#FEE2E2" };
  };

  const getWifiStatus = (internet?: number) => {
    if(!internet) return
    
    if (internet < 50)
      return { label: "Ruim", color: "#F59E0B" };
      return { label: "Bom", color: "#22C55E" };
  };

  const ocupacao = getOcupacaoStatus(ocupacaoPercent);

  const infoSensor = infoRoom?.ultimas;

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

  const wifiAtrasado = verificarWifi(infoSensor?.wifi?.timestamp);
  const wifiAtivo = !wifiAtrasado;

  const wifiStatus = wifiAtivo
  ? getWifiStatus(infoSensor?.wifi?.valor)
  : { label: "Sem Wi-Fi", color: "#9CA3AF" };

  return (
    <Link
      href={{ pathname: "/roomDetails", params: { id } }}
      style={cardStyles.container}
    >
      <View style={cardStyles.inlineTitle}>
        <Text style={cardStyles.title}>{sala}</Text>
        <SimpleLineIcons name="arrow-right" size={16} color="#D9D9D9" />
      </View>

      <View style={cardStyles.inlineOthers}>
        <Text
          style={[
            cardStyles.statusBadge,
            { backgroundColor: ocupacao.badge, color: ocupacao.color },
          ]}
        >
          {ocupacao.label}
        </Text>

        <Text>{ocupacaoPercent}% Ocupado</Text>
      </View>

      <View style={cardStyles.progressBar}>
        <View
          style={[
            cardStyles.progressFill,
            {
              width: `${ocupacaoPercent ?? 0}%`,
              backgroundColor: ocupacao.color,
            },
          ]}
        />
      </View>

      <View style={cardStyles.inlineOthers}>
        <View style={cardStyles.infoItem}>
          <FontAwesome6
           name="temperature-empty"
           size={18}
           color="#374151"
          />
          <Text style={cardStyles.infoText}>
           {temperatura || " Sem temperatura"}°C
          </Text>
       </View>

       <View style={cardStyles.infoItem}>
        <AntDesign
         name="wifi"
         size={18}
         color={wifiStatus?.color}
        />
       <Text
         style={[
         cardStyles.infoText,
          { color: wifiStatus?.color },
         ]}
        >
           {wifiStatus?.label}
        </Text>
     </View>
   </View>
   </Link>
  );
}
