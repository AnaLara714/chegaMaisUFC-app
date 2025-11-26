import { cardStyles } from "@/src/styles/card";
import {
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons/";
import { Link } from "expo-router";
import { Text, View } from "react-native";

type Props = {
  sala: string;
  vagas: number;
  vagasOcupadas: number;
  temperatura: number;
  wifi?: number;
  internet?: number;
};

export default function CardPreview({
  sala,
  vagas,
  vagasOcupadas,
  temperatura,
  wifi,
  internet,
}: Props) {
  const percentageOfOccupation = vagas - vagasOcupadas;

  return (
    <Link
      href={{ pathname: "/roomDetails", params: { sala } }}
      style={cardStyles.container}
    >
      <View style={cardStyles.inlineTitle}>
        <Text style={cardStyles.title}>{sala}</Text>
        <SimpleLineIcons name="arrow-right" size={16} color="#D9D9D9" />
      </View>

      <View style={cardStyles.inlineOthers}>
        <Text>Baixa</Text>
        <Text>{percentageOfOccupation}</Text>
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
          <Text>Bom</Text>
        </Text>
        <Text style={cardStyles.inlineOthers}>
          <MaterialCommunityIcons name="ethernet" size={20} color="black" />
          <Text>Boa</Text>
        </Text>
      </View>
    </Link>
  );
}
