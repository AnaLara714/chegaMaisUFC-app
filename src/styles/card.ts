import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "90%",
    height: 160,
    margin: 10,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#f4f4f4ff",
    fontFamily: "Poppins_500Medium",
    boxShadow: "0px 4px 4px 0px #00000025",
  },
  inlineTitle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inlineOthers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    fontSize: 12,
  },
  title: {
    color: "#535353",
    fontSize: 22,
    fontFamily: "Poppins_500Medium",
  },
});
