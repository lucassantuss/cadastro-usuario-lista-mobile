import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: "#f4f6f9",
  },

  headerContainer: {
    // separação do header (form) do resto
    paddingBottom: 8,
  },

  title: {
    fontSize: 26,
    marginBottom: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#1e293b",
  },

  subTitle: {
    fontSize: 20,
    marginTop: 18,
    marginBottom: 12,
    fontWeight: "600",
    color: "#334155",
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 14,
    color: "#475569",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 14,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    // sombra leve
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },

  buttonContainer: {
    flexDirection: "column",
    marginTop: 18,
  },

  buttonSpacing: {
    marginBottom: 12,
  },

  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },

  save: {
    backgroundColor: "#16a34a",
  },

  clear: {
    backgroundColor: "#f59e0b",
  },

  clearAll: {
    backgroundColor: "#dc2626",
  },

  userCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    marginTop: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },

  userText: {
    fontSize: 15,
    color: "#1e293b",
    flex: 1,
    marginRight: 10,
  },

  userButtons: {
    flexDirection: "row",
  },

  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  smallButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  edit: {
    backgroundColor: "#2563eb",
  },

  delete: {
    backgroundColor: "#ef4444",
  },
});
