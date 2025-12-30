import { useRooms } from "@/src/contexts/roomContext";
import { cardStyles } from "@/src/styles/card";
import { AntDesign, FontAwesome6, SimpleLineIcons } from "@expo/vector-icons/";
import { Link } from "expo-router";
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
  internet,
}: Props) {
  const { fetchInfoRoom } = useRooms();

  return (
    <Link
      href={{ pathname: "/roomDetails", params: { sala } }}
      style={cardStyles.container}
      onPress={() => fetchInfoRoom(id)}
    >
      <View style={cardStyles.inlineTitle}>
        <Text style={cardStyles.title}>{sala}</Text>
        <SimpleLineIcons name="arrow-right" size={16} color="#D9D9D9" />
      </View>

      <View style={cardStyles.inlineOthers}>
        <Text>Baixa</Text>
        <Text>{ocupacaoPercent}</Text>
        <Text>%</Text>
        <Text>Ocupado</Text>
      </View>

      <View style={cardStyles.inlineOthers}>
        <Text style={cardStyles.inlineOthers}>
          <FontAwesome6 name="temperature-empty" size={20} color="black" />{" "}
          <Text>{temperatura}°C</Text>
        </Text>
        <Text style={cardStyles.inlineOthers}>
          <AntDesign name="wifi" size={20} color="black" />
          <Text>{internet}</Text>
        </Text>
      </View>
    </Link>
  );
}
