import CardPreview from "@/src/components/custom/cardPreview";
import { useRooms } from "@/src/contexts/roomContext";
import { globalStyles } from "@/src/styles/global";
import { headerStyle } from "@/src/styles/header";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
  const { rooms } = useRooms();

  // console.log("vindo ", rooms);

  return (
    <View style={globalStyles.container}>
      <View style={headerStyle.container}>
        <Text style={headerStyle.title}>Chega Mais, UFC!</Text>
        <Text style={headerStyle.subtitle}>
          Espaços disponíveis em tempo real
        </Text>
      </View>
      <ScrollView style={globalStyles.scroll}>
        <View style={globalStyles.container}>
          {rooms.map((item) => {
            return (
              <CardPreview
                key={item.id}
                id={item.id}
                sala={item.nome}
                ocupacaoPercent={item?.ocupacaoPercent}
                temperatura={item.ultimas?.temperatura?.valor}
                wifi={item.ultimas?.wifi?.valor}
                internet={item.ultimas?.internet?.valor}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
