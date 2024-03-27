import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Felipe Fragoso</Text>
      <Text style={styles.cargo}>Desenvolvedor FullStack</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
  },

nome: {
  fontSize:26,
  fontWeight: 10,
  padding:9,
  margin: 10,
  backgroundColor:"#FED766",
},
cargo: {
  fontSize:20,
  fontWeight: 3,
  padding:10,
  margin: 10,
  backgroundColor: "#009FB7",

}

});
