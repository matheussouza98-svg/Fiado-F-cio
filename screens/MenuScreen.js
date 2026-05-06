import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from "react-native";


import { Ionicons } from "@expo/vector-icons";


export default function MenuScreen() {
  const [telaAtual, setTelaAtual] = useState("Home");
  const [menuAberto, setMenuAberto] = useState(true);


  const { width } = useWindowDimensions();
  const isMobile = width < 768;


  function navegar(tela) {
    setTelaAtual(tela);
    if (isMobile) setMenuAberto(false);
  }


  // ✅ FUNÇÃO SEGURA (NÃO QUEBRA)
  function formatarMoeda(valor) {
    const numero = Number(valor) || 0;


    return (
      "R$ " +
      numero
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    );
  }


  const devedores = [
    { nome: "João Silva", dias: "2 dias", valor: 1000 },
    { nome: "Maria Santos", dias: "5 dias", valor: 100 },
    { nome: "Ana Clara", dias: "1 semana", valor: 100 },
    { nome: "Paulo Henrique", dias: "1 semana", valor: 50 },
  ];


  const total = devedores.reduce((acc, item) => acc + item.valor, 0);


  return (
    <View style={styles.container}>
      {/* OVERLAY */}
      <Pressable
        style={[
          styles.overlay,
          { display: menuAberto && isMobile ? "flex" : "none" },
        ]}
        onPress={() => setMenuAberto(false)}
      />


      {/* MENU */}
      <View
        style={[
          isMobile ? styles.sidebarMobile : styles.sidebar,
          { display: menuAberto ? "flex" : "none" },
        ]}
      >

        <View style={styles.headerCard}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <View>
            <Text style={styles.title}>
              Fiado{" "}
              <Text style={{ color: "#16c05d" }}>
                Fácil
              </Text>
            </Text>

            <Text style={styles.subtitle}>
              Caderneta digital de fiado{"\n"}e vendas
            </Text>
          </View>
        </View>


        <ScrollView>
          <MenuItem icon="home-outline" title="Home" description="Resumo e clientes devendo" active={telaAtual === "Home"} onPress={() => navegar("Home")} />
          <MenuItem icon="people-outline" title="Clientes" description="Lista de todos os clientes" active={telaAtual === "Clientes"} onPress={() => navegar("Clientes")} />
          <MenuItem icon="add-circle-outline" title="Nova Dívida" description="Adicionar nova venda fiado" active={telaAtual === "Nova Dívida"} onPress={() => navegar("Nova Dívida")} />
          <MenuItem icon="card-outline" title="Pagamento" description="Registrar pagamento" active={telaAtual === "Pagamento"} onPress={() => navegar("Pagamento")} />
          <MenuItem icon="bar-chart-outline" title="Relatórios" description="Resumo e estatísticas" active={telaAtual === "Relatórios"} onPress={() => navegar("Relatórios")} />
          <MenuItem icon="settings-outline" title="Configurações" description="Ajustes do aplicativo" active={telaAtual === "Configurações"} onPress={() => navegar("Configurações")} />


          {/* DICA */}
          <View style={styles.dicaMenu}>
            <View style={styles.dicaHeader}>
              <View style={styles.dicaLeft}>
                <Text style={styles.emoji}>💡</Text>
                <Text style={styles.dicaMenuTitulo}>DICA</Text>
              </View>
            </View>


            <View style={styles.dicaTextoRow}>
              <Text style={styles.dicaMenuTexto}>
                Use o botão "Cobrar WhatsApp" para enviar lembretes automáticos
                para seus clientes!
              </Text>
              <Ionicons name="logo-whatsapp" size={20} color="#25D366" />
            </View>
          </View>
        </ScrollView>
      </View>


      {/* CONTEÚDO */}
      <View style={styles.content}>
        <View style={styles.topBar}>
          <Pressable onPress={() => setMenuAberto(!menuAberto)}>
            <Ionicons name="menu" size={28} />
          </Pressable>


          <Text style={styles.pageTitle}>{telaAtual}</Text>
        </View>


        {telaAtual === "Home" ? (
          <ScrollView>
            {/* CARD VERDE */}
            <View style={styles.homeCard}>
              <Text style={styles.ola}>Olá, Matheus! 👋</Text>
              <Text style={styles.resumo}>Resumo do seu fiado</Text>


              <View style={styles.saldoBox}>
                <Text style={styles.saldoLabel}>Total a receber</Text>
                <Text style={styles.saldo}>
                  {formatarMoeda(total)}
                </Text>
                <Text style={styles.emAberto}>Em aberto</Text>
              </View>
            </View>


            {/* DEVEDORES */}
            <View style={styles.devedoresContainer}>
              <Text style={styles.devedoresTitulo}>Quem está devendo</Text>


              {devedores.map((item, index) => {
                const isVermelho = item.valor >= 500;


                return (
                  <View key={index} style={styles.devedorItem}>
                    <Image
                      source={require("../assets/user.png")}
                      style={styles.devedorAvatar}
                    />


                    <View style={styles.devedorInfo}>
                      <View>
                        <Text style={styles.devedorNome}>{item.nome}</Text>
                        <Text style={styles.ultimaCompra}>
                          Última compra: {item.dias}
                        </Text>
                      </View>


                      <View style={styles.devedorDireita}>
                        <Text
                          style={
                            isVermelho
                              ? styles.valorVermelho
                              : styles.valorAmarelo
                          }
                        >
                          {formatarMoeda(item.valor)}
                        </Text>


                        <Pressable
                          style={
                            isVermelho
                              ? styles.botaoCobrarVermelho
                              : styles.botaoCobrarAmarelo
                          }
                        >
                          <Text
                            style={
                              isVermelho
                                ? styles.textoCobrarVermelho
                                : styles.textoCobrarAmarelo
                            }
                          >
                            Cobrar
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                );
              })}


              {/* BOTÃO + */}
              <Pressable style={styles.botaoAddGrande}>
                <Ionicons name="add" size={32} color="#fff" />
              </Pressable>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.screenBox}>
            <Text style={styles.homeTitle}>{telaAtual}</Text>
          </View>
        )}
      </View>
    </View>
  );
}


function MenuItem({ icon, title, description, active, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.item, active && styles.activeItem]}>
      <Ionicons name={icon} size={24} color={active ? "#16c05d" : "#555"} />


      <View style={{ marginLeft: 12 }}>
        <Text style={[styles.itemText, active && styles.activeText]}>
          {title}
        </Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20, // ✅ corrigido
    backgroundColor: "#f5f5f5",
  },


  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 9998,
  },


  sidebar: {
    width: 280,
    backgroundColor: "#fff",
    padding: 20,
    zIndex: 9999,
  },


  sidebarMobile: {
    position: "absolute",
    top: 90,
    left: 10,
    width: 260,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    zIndex: 9999,
    elevation: 20,
  },


  content: {
    flex: 1,
    padding: 20,
  },


  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },


  pageTitle: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: "bold",
  },


  headerCard: {
    flexDirection: "row",
    marginBottom: 20,
  },


  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },


  title: {
    fontWeight: "bold",
    fontSize: 18,
  },


  subtitle: {
    fontSize: 12,
    color: "#777",
  },


  item: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },


  activeItem: {
    backgroundColor: "#e8fff1",
  },


  itemText: {
    fontWeight: "bold",
  },


  itemDescription: {
    fontSize: 12,
    color: "#777",
  },


  activeText: {
    color: "#16c05d",
  },


  dicaMenu: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#e8fff1",
    borderRadius: 10,
  },


  dicaHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },


  dicaLeft: {
    flexDirection: "row",
    alignItems: "center",
  },


  emoji: {
    fontSize: 16,
    marginRight: 6,
  },


  dicaMenuTitulo: {
    color: "#16c05d",
    fontWeight: "bold",
  },


  dicaTextoRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 6,
  },


  dicaMenuTexto: {
    fontSize: 12,
    color: "#333",
    flex: 1,
    marginRight: 8,
  },


  homeCard: {
    backgroundColor: "#16c05d",
    padding: 20,
    borderRadius: 15,
  },


  ola: {
    color: "#fff",
    fontSize: 18,
  },


  resumo: {
    color: "#fff",
  },


  saldoBox: {
    marginTop: 15,
    backgroundColor: "#1fd56a",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },


  saldoLabel: {
    color: "#fff",
  },


  saldo: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 5,
  },


  emAberto: {
    color: "#fff",
  },


  devedoresContainer: {
    marginTop: 20,
  },


  devedoresTitulo: {
    fontWeight: "bold",
    marginBottom: 10,
  },


  devedorItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
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


  devedorNome: {
    fontWeight: "bold",
  },


  ultimaCompra: {
    fontSize: 12,
    color: "#777",
  },


  devedorDireita: {
    alignItems: "flex-end",
  },


  valorVermelho: {
    color: "red",
    fontWeight: "bold",
  },


  valorAmarelo: {
    color: "#f5b800",
    fontWeight: "bold",
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
    backgroundColor: "#16c05d",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 10,
  },


  screenBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },


  homeTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
});

