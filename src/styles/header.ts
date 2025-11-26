import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "#005DFF",
    paddingTop: 40,
    paddingLeft: "5%",
    paddingBottom: "2.5%",
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 22,
    marginTop: 15,
    fontFamily: "Poppins_600SemiBold",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 8,
    fontFamily: "Poppins_400Regular",
  },
  goBack: {
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
});
