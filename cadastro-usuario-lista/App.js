import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CadastroLista from './src/cadastroLista/cadastroLista';

export default function App() {
  /// Lucas Araujo dos Santos
  /// 081210009
  /// EC10
  return (
    <View style={styles.container}>
      <CadastroLista />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
