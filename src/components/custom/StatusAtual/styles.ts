import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    color: "#4B5563",
    fontFamily: "Poppins_500Medium",
  },

  badge: {
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },

  badgeText: {
    fontSize: 12,
    color: "#059669",
    fontFamily: "Poppins_500Medium",
    fontWeight: "bold",
  },

  percent: {
    fontSize: 48,
    color: "#10B981",
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    marginTop: 8,
    lineHeight: 56,
  },

  subtitle: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    marginBottom: 20,
  },

  progressBackground: {
    width: "100%",
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 16,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#10B981",
    borderRadius: 4,
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  vagas: {
    fontSize: 13,
    color: "#6B7280",
    fontFamily: "Poppins_400Regular",
  },
});