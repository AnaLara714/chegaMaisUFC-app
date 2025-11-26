import { globalStyles } from "@/src/styles/global";
import { headerStyle } from "@/src/styles/header";
import { Feather } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RoomDetails() {
  const { sala: room } = useLocalSearchParams();
  return (
    <View style={globalStyles.container}>
      <View style={headerStyle.container}>
        <Link href="/" style={headerStyle.goBack}>
          <Feather name="arrow-left" size={22} color="#FFFFFF" />
          <Text>Voltar</Text>
        </Link>
        <Text style={headerStyle.title}>{room} </Text>
      </View>
    </View>
  );
}
