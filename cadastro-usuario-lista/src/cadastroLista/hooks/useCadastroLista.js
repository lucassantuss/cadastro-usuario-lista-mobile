import { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useCadastroLista() {
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [editando, setEditando] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    carregar();
  }, []);

  const validar = () => {
    if (isNaN(codigo) || Number(codigo) <= 0) {
      Alert.alert("Erro", "O código deve ser maior que 0");
      return false;
    }
    if (!nome.trim()) {
      Alert.alert("Erro", "O nome é obrigatório");
      return false;
    }
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "E-mail inválido");
      return false;
    }
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não conferem");
      return false;
    }
    if (
      senha.length < 5 ||
      !/[A-Z]/.test(senha) ||
      !/[0-9]/.test(senha)
    ) {
      Alert.alert(
        "Erro",
        "A senha deve ter pelo menos 5 caracteres, 1 letra maiúscula e 1 número"
      );
      return false;
    }
    return true;
  };

  const salvar = async () => {
    if (!validar()) return;

    const novoUsuario = { codigo, nome, email, senha };

    try {
      let novaLista;
      
      if (editando !== null) {
        novaLista = usuarios.map((u, i) =>
          i === editando ? novoUsuario : u
        );
        setEditando(null);
      } 
      else {
        novaLista = [...usuarios, novoUsuario];
      }

      setUsuarios(novaLista);
      await AsyncStorage.setItem("@usuarios", JSON.stringify(novaLista));

      Alert.alert("Sucesso", "Usuário salvo com sucesso!");
      limparCampos();
    } catch {
      Alert.alert("Erro", "Não foi possível salvar o usuário");
    }
  };

  const carregar = async () => {
    try {
      const data = await AsyncStorage.getItem("@usuarios");
      if (data) {
        setUsuarios(JSON.parse(data));
      }
    } catch {
      Alert.alert("Erro", "Não foi possível carregar os usuários");
    }
  };

  const limparCampos = () => {
    setCodigo("");
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setEditando(null);
  };

  const limparTudo = async () => {
    try {
      await AsyncStorage.removeItem("@usuarios");
      setUsuarios([]);
      Alert.alert("Sucesso", "Todos os cadastros foram apagados!");
    } catch {
      Alert.alert("Erro", "Não foi possível limpar os dados");
    }
  };

  const editarUsuario = (index) => {
    const u = usuarios[index];
    setCodigo(u.codigo);
    setNome(u.nome);
    setEmail(u.email);
    setSenha(u.senha);
    setConfirmarSenha(u.senha);
    setEditando(index);
  };

  const excluirUsuario = async (index) => {
    try {
      const novaLista = usuarios.filter((_, i) => i !== index);
      setUsuarios(novaLista);
      await AsyncStorage.setItem("@usuarios", JSON.stringify(novaLista));
      Alert.alert("Sucesso", "Usuário excluído!");
    } catch {
      Alert.alert("Erro", "Não foi possível excluir o usuário");
    }
  };

  return {
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
    carregar,
    limparCampos,
    limparTudo,
    editarUsuario,
    excluirUsuario,
    editando,
  };
}
