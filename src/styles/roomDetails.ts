import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5F9",
  },

  // --- HEADER (Azul) ---
  headerContainer: {
    backgroundColor: "#0055FF",
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    opacity: 0.9,
  },

  backText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 8,
    fontFamily: "Poppins_500Medium",
  },

  title: {
    fontSize: 20,                      
    color: "#FFFFFF",
    fontFamily: "Poppins_600SemiBold", 
    fontWeight: "600",                 
    width: "100%",
    textAlign: "left",                 
  },

  // --- CONTEÚDO (Cards) ---
  content: {
    padding: 20,
    paddingBottom: 40,
    gap: 16
  },

  // --- BOTÃO RESERVAR ---
  buttonContainer: {
    backgroundColor: "#0055FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "medium",
    marginLeft: 8,
    fontFamily: "Poppins_500Medium",
  }
});