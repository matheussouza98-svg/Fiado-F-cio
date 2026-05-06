import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ClientesScreen() {
  const [busca, setBusca] = useState("");

  const clientes = [
    { nome: "João Silva" },
    { nome: "Maria Santos" },
    { nome: "Ana Clara" },
    { nome: "Paulo Henrique" },
    { nome: "Carlos Lima" },
    { nome: "Fernanda Souza" },
  ];

  // 🔥 FILTRO DA PESQUISA
  const clientesFiltrados = clientes.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>

      {/* TÍTULO (já aparece no topo do app também) */}
      <Text style={styles.titulo}>Clientes</Text>

      {/* 🔥 BARRA DE PESQUISA */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />

        <TextInput
          placeholder="Buscar cliente..."
          value={busca}
          onChangeText={setBusca}
          style={styles.input}
        />
      </View>

      {/* LISTA */}
      <ScrollView style={{ marginTop: 15 }}>
        {clientesFiltrados.length > 0 ? (
          clientesFiltrados.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.vazio}>Nenhum cliente encontrado</Text>
        )}
      </ScrollView>

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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderRadius: 10,
    elevation: 2,
  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: "#333",
  },

  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },

  vazio: {
    marginTop: 20,
    textAlign: "center",
    color: "#888",
  },
});