import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ClientesScreen({ onNavegar }) {
  const [busca, setBusca] = useState("");

  const clientes = [
    { nome: "João Silva", telefone: "(85) 99999-1111", valor: 1000 },
    { nome: "Maria Santos", telefone: "(85) 98888-2222", valor: 100 },
    { nome: "Ana Clara", telefone: "(85) 95555-7777", valor: 100 },
    { nome: "Paulo Henrique", telefone: "(85) 96666-4444", valor: 50 },
    { nome: "Fernanda Costa", telefone: "(85) 93333-8888", valor: 0 },
  ];

  function formatarMoeda(valor) {
    return (
      "R$ " +
      Number(valor)
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    );
  }

  const clientesFiltrados = clientes.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* 🔍 BUSCA */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#999" />
        <TextInput
          placeholder="Buscar cliente..."
          value={busca}
          onChangeText={setBusca}
          style={styles.input}
          placeholderTextColor="#999"
          underlineColorAndroid="transparent"
          selectionColor="#16c05d"
        />
      </View>

      {/* LISTA */}
      <ScrollView style={{ marginTop: 15 }}>
        {clientesFiltrados.map((item, index) => {
          const isVermelho = item.valor >= 500;
          const isPago = item.valor === 0;

          return (
            <View key={index} style={styles.card}>
              <Image
                source={require("../assets/user.png")}
                style={styles.avatar}
              />

              <View style={styles.info}>
                <View>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.telefone}>{item.telefone}</Text>
                </View>

                <View style={styles.direita}>
                  <Text
                    style={
                      isPago
                        ? styles.valorVerde
                        : isVermelho
                        ? styles.valorVermelho
                        : styles.valorAmarelo
                    }
                  >
                    {formatarMoeda(item.valor)}
                  </Text>

                  <View
                    style={
                      isPago
                        ? styles.botaoVerde
                        : isVermelho
                        ? styles.botaoVermelho
                        : styles.botaoAmarelo
                    }
                  >
                    <Text
                      style={
                        isPago
                          ? styles.textoVerde
                          : isVermelho
                          ? styles.textoVermelho
                          : styles.textoAmarelo
                      }
                    >
                      {isPago ? "Pago" : "Devendo"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}

        {/* BOTÃO NOVA DÍVIDA */}
        <Pressable
          style={styles.novaDivida}
          onPress={() => onNavegar("Nova Dívida")}
        >
          <Text style={styles.novaDividaTexto}>+ Nova Dívida</Text>
        </Pressable>
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

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderRadius: 25,
    height: 42,
    elevation: 2,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    height: "100%",
    fontSize: 14,
    color: "#333",
    borderWidth: 0,
    outlineStyle: "none",
  },

  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: "#ddd",
  },

  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },

  telefone: {
    fontSize: 12,
    color: "#777",
  },

  direita: {
    alignItems: "center",
  },

  valorVermelho: {
    color: "red",
    fontWeight: "bold",
  },

  valorAmarelo: {
    color: "#f5b800",
    fontWeight: "bold",
  },

  valorVerde: {
    color: "#16c05d",
    fontWeight: "bold",
  },

  botaoVermelho: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  botaoAmarelo: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#f5b800",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  botaoVerde: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#16c05d",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  textoVermelho: {
    color: "red",
    fontSize: 13,
    fontWeight: "bold",
  },

  textoAmarelo: {
    color: "#f5b800",
    fontSize: 13,
    fontWeight: "bold",
  },

  textoVerde: {
    color: "#16c05d",
    fontSize: 13,
    fontWeight: "bold",
  },

  novaDivida: {
    marginTop: 10,
    backgroundColor: "#16c05d",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  novaDividaTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});