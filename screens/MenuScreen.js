import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function MenuScreen() {

  const [telaAtual, setTelaAtual] = useState("Home");
  const [menuAberto, setMenuAberto] = useState(true);

  return (
    <View style={styles.container}>

      {/* MENU LATERAL */}
      {menuAberto && (
        <View style={styles.sidebar}>

          <View style={styles.headerCard}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />

            <View>
              <Text style={styles.title}>Fiado Fácil</Text>
              <Text style={styles.subtitle}>
                Caderneta digital de fiado e vendas
              </Text>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>

            <MenuItem
              icon="home-outline"
              title="Home"
              active={telaAtual === "Home"}
              onPress={() => setTelaAtual("Home")}
            />

            <MenuItem
              icon="people-outline"
              title="Clientes"
              active={telaAtual === "Clientes"}
              onPress={() => setTelaAtual("Clientes")}
            />

            <MenuItem
              icon="add-circle-outline"
              title="Nova Dívida"
              active={telaAtual === "Nova Dívida"}
              onPress={() => setTelaAtual("Nova Dívida")}
            />

            <MenuItem
              icon="card-outline"
              title="Pagamento"
              active={telaAtual === "Pagamento"}
              onPress={() => setTelaAtual("Pagamento")}
            />

            <MenuItem
              icon="bar-chart-outline"
              title="Relatórios"
              active={telaAtual === "Relatórios"}
              onPress={() => setTelaAtual("Relatórios")}
            />

            <MenuItem
              icon="settings-outline"
              title="Configurações"
              active={telaAtual === "Configurações"}
              onPress={() => setTelaAtual("Configurações")}
            />

          </ScrollView>

        </View>
      )}

      {/* CONTEÚDO */}
      <View style={styles.content}>

        {/* TOPO */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => setMenuAberto(!menuAberto)}>
            <Ionicons name="menu" size={34} color="#111" />
          </TouchableOpacity>

          <Text style={styles.pageTitle}>{telaAtual}</Text>
        </View>

        {/* HOME */}
        {telaAtual === "Home" ? (

          <ScrollView showsVerticalScrollIndicator={false}>

            {/* CARD VERDE */}
            <View style={styles.homeCard}>
              <Text style={styles.ola}>Olá, Matheus! 👋</Text>
              <Text style={styles.resumo}>Resumo do seu fiado</Text>

              <View style={styles.saldoBox}>
                <Text style={styles.saldoLabel}>Total a receber</Text>
                <Text style={styles.saldo}>R$ 1.250,00</Text>
                <Text style={styles.emAberto}>Em aberto</Text>
              </View>
            </View>

            {/* DEVEDORES */}
            <View style={styles.devedoresContainer}>

              <Text style={styles.devedoresTitulo}>
                Quem está devendo
              </Text>

              {/* JOÃO */}
              <View style={styles.devedorItem}>
                <Image
                  source={require("../assets/user.png")}
                  style={styles.devedorAvatar}
                />

                <View style={styles.devedorInfo}>
                  <View style={styles.devedorEsquerda}>
                    <Text style={styles.devedorNome}>João Silva</Text>
                    <Text style={styles.ultimaCompra}>
                      Última compra: 2 dias
                    </Text>
                  </View>

                  <View style={styles.devedorDireita}>
                    <Text style={styles.valorVermelho}>
                      R$ 1.000,00
                    </Text>

                    <TouchableOpacity style={styles.botaoCobrarVermelho}>
                      <Text style={styles.textoCobrarVermelho}>
                        Cobrar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* MARIA */}
              <View style={styles.devedorItem}>
                <Image
                  source={require("../assets/user.png")}
                  style={styles.devedorAvatar}
                />

                <View style={styles.devedorInfo}>
                  <View style={styles.devedorEsquerda}>
                    <Text style={styles.devedorNome}>Maria Santos</Text>
                    <Text style={styles.ultimaCompra}>
                      Última compra: 5 dias
                    </Text>
                  </View>

                  <View style={styles.devedorDireita}>
                    <Text style={styles.valorAmarelo}>
                      R$ 100,00
                    </Text>

                    <TouchableOpacity style={styles.botaoCobrarAmarelo}>
                      <Text style={styles.textoCobrarAmarelo}>
                        Cobrar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* ANA */}
              <View style={styles.devedorItem}>
                <Image
                  source={require("../assets/user.png")}
                  style={styles.devedorAvatar}
                />

                <View style={styles.devedorInfo}>
                  <View style={styles.devedorEsquerda}>
                    <Text style={styles.devedorNome}>Ana Clara</Text>
                    <Text style={styles.ultimaCompra}>
                      Última compra: 1 semana
                    </Text>
                  </View>

                  <View style={styles.devedorDireita}>
                    <Text style={styles.valorAmarelo}>
                      R$ 100,00
                    </Text>

                    <TouchableOpacity style={styles.botaoCobrarAmarelo}>
                      <Text style={styles.textoCobrarAmarelo}>
                        Cobrar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* PAULO */}
              <View style={styles.devedorItem}>
                <Image
                  source={require("../assets/user.png")}
                  style={styles.devedorAvatar}
                />

                <View style={styles.devedorInfo}>
                  <View style={styles.devedorEsquerda}>
                    <Text style={styles.devedorNome}>
                      Paulo Henrique
                    </Text>

                    <Text style={styles.ultimaCompra}>
                      Última compra: 1 semana
                    </Text>
                  </View>

                  <View style={styles.devedorDireita}>
                    <Text style={styles.valorAmarelo}>
                      R$ 50,00
                    </Text>

                    <TouchableOpacity style={styles.botaoCobrarAmarelo}>
                      <Text style={styles.textoCobrarAmarelo}>
                        Cobrar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* BOTÃO + */}
              <TouchableOpacity style={styles.botaoAddGrande}>
                <Ionicons name="add" size={42} color="#fff" />
              </TouchableOpacity>

            </View>

          </ScrollView>

        ) : (

          <View style={styles.screenBox}>
            <Text style={styles.homeTitle}>{telaAtual}</Text>

            <Text style={styles.homeText}>
              Você está na tela {telaAtual}
            </Text>
          </View>

        )}

      </View>
    </View>
  );
}

function MenuItem({ icon, title, active, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.item, active && styles.activeItem]}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={34}
        color={active ? "#16c05d" : "#555"}
      />

      <Text style={[styles.itemText, active && styles.activeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    width: "100%",
  },

  sidebar: {
    width: 540,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderRightColor: "#eee",
    marginLeft: 12,
  },

  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },

  // LOGO MAIOR
  logo: {
    width: 95,
    height: 95,
    marginRight: 18,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#111",
  },

  subtitle: {
    fontSize: 16,
    color: "#777",
    marginTop: 4,
    width: 260,
  },

  // BOTÕES MAIORES
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 18,
    borderRadius: 18,
    marginBottom: 12,
  },

  activeItem: {
    backgroundColor: "#e8fff1",
    borderLeftWidth: 7,
    borderLeftColor: "#16c05d",
  },

  itemText: {
    marginLeft: 18,
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
  },

  activeText: {
    color: "#16c05d",
  },

  content: {
    flex: 1,
    padding: 20,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  pageTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 18,
    color: "#111",
  },

  screenBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  homeTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#16c05d",
  },

  homeText: {
    marginTop: 10,
    fontSize: 18,
    color: "#555",
  },

  homeCard: {
    backgroundColor: "#16c05d",
    borderRadius: 25,
    padding: 30,
  },

  ola: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  resumo: {
    color: "#dfffe9",
    marginTop: 8,
    fontSize: 16,
  },

  saldoBox: {
    marginTop: 30,
    backgroundColor: "#1fd56a",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },

  saldoLabel: {
    color: "#dfffe9",
    fontSize: 14,
  },

  saldo: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 8,
  },

  emAberto: {
    color: "#dfffe9",
    marginTop: 8,
    fontSize: 14,
  },

  devedoresContainer: {
    marginTop: 20,
  },

  devedoresTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },

  devedorItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  devedorAvatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: "#ddd",
  },

  devedorInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  devedorEsquerda: {
    flex: 1,
  },

  devedorDireita: {
    alignItems: "flex-end",
  },

  devedorNome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },

  ultimaCompra: {
    fontSize: 12,
    color: "#777",
  },

  valorVermelho: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },

  valorAmarelo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f5b800",
  },

  botaoCobrarVermelho: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  botaoCobrarAmarelo: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#f5b800",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  textoCobrarVermelho: {
    color: "red",
    fontSize: 13,
    fontWeight: "bold",
  },

  textoCobrarAmarelo: {
    color: "#f5b800",
    fontSize: 13,
    fontWeight: "bold",
  },

  botaoAddGrande: {
    alignSelf: "flex-end",
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#16c05d",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

});