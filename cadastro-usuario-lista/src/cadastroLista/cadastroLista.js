import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "./cadastroListaStyles";
import useCadastroLista from "./hooks/useCadastroLista";

export default function CadastroLista() {
  /// Lucas Araujo dos Santos
  /// 081210009
  /// EC10
  const {
    codigo,
    setCodigo,
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    confirmarSenha,
    setConfirmarSenha,
    usuarios,
    salvar,
    limparCampos,
    limparTudo,
    editarUsuario,
    excluirUsuario,
    editando,
  } = useCadastroLista();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f6f9" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Cadastro de Usuário</Text>

            <Text style={styles.label}>Código</Text>
            <TextInput
              style={styles.input}
              value={codigo}
              onChangeText={setCodigo}
              keyboardType="numeric"
              placeholder="Digite o código"
              returnKeyType="next"
            />

            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
              returnKeyType="next"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Digite seu e-mail"
              autoCapitalize="none"
              returnKeyType="next"
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholder="Digite sua senha"
              returnKeyType="next"
            />

            <Text style={styles.label}>Confirmar Senha</Text>
            <TextInput
              style={styles.input}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
              placeholder="Confirme sua senha"
              returnKeyType="done"
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.save, styles.buttonSpacing]}
                onPress={salvar}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>
                  {editando !== null ? "Atualizar" : "Salvar"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.clear, styles.buttonSpacing]}
                onPress={limparCampos}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Limpar Campos</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.clearAll]}
                onPress={limparTudo}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Apagar Tudo</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.subTitle}>Usuários Cadastrados</Text>
          </View>

          <FlatList
            data={usuarios}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false} // Scroll já vem do ScrollView
            renderItem={({ item, index }) => (
              <View style={styles.userCard}>
                <Text style={styles.userText}>
                  {item.codigo} - {item.nome} - {item.email}
                </Text>
                <View style={styles.userButtons}>
                  <TouchableOpacity
                    style={[styles.smallButton, styles.edit]}
                    onPress={() => editarUsuario(index)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.smallButtonText}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.smallButton, styles.delete]}
                    onPress={() => excluirUsuario(index)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.smallButtonText}>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            ListFooterComponent={<View style={{ height: 40 }} />}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
