import CardPreview from "@/src/components/custom/cardPreview";
import { globalStyles } from "@/src/styles/global";
import { headerStyle } from "@/src/styles/header";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
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
          <CardPreview
            sala="Biblioteca Mucambinho"
            vagas={50}
            vagasOcupadas={30}
            temperatura={22}
          />
          <CardPreview
            sala="Biblioteca Mucambinho"
            vagas={50}
            vagasOcupadas={30}
            temperatura={22}
          />
          <CardPreview
            sala="Lab. da Odontologia"
            vagas={50}
            vagasOcupadas={30}
            temperatura={22}
          />
          <CardPreview
            sala="Lab. de Informática"
            vagas={60}
            vagasOcupadas={20}
            temperatura={37}
          />
          <CardPreview
            sala="Lab. da Odontologia"
            vagas={50}
            vagasOcupadas={30}
            temperatura={22}
          />
          <CardPreview
            sala="Lab. de Informática"
            vagas={60}
            vagasOcupadas={20}
            temperatura={37}
          />
          <CardPreview
            sala="Lab. da Odontologia"
            vagas={50}
            vagasOcupadas={30}
            temperatura={22}
          />
          <CardPreview
            sala="Lab. de Informáticaaa"
            vagas={60}
            vagasOcupadas={20}
            temperatura={37}
          />
        </View>
      </ScrollView>
    </View>
  );
}
