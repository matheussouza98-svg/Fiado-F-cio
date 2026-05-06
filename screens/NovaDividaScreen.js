import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function NovaDividaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nova Dívida</Text>
      <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.botaoVoltarTexto}>← Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botaoVoltar: {
    marginTop: 10,
    backgroundColor: "#16c05d",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  botaoVoltarTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});