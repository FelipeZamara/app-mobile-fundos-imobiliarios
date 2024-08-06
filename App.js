import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MXRF11 from './components/MXRF11';
import VGHF11 from './components/VGHF11';
import VGIR11 from './components/VGIR11';
import CPTS11 from './components/CPTS11';
import BCFF11 from './components/BCFF11';
import XPCA11 from './components/XPCA11';
import RZAG11 from './components/RZAG11';
import KNSC11 from './components/KNSC11';
import MCHF11 from './components/MCHF11';
import HGRU11 from './components/HGRU11';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.titulo}>FUNDOS DE INVESTIMENTO IMOBILIARIO</Text>
      <MXRF11/>
      <VGHF11/>
      <VGIR11/>
      <CPTS11/>
      <BCFF11/>
      <XPCA11/>
      <RZAG11/>
      <KNSC11/>
      <MCHF11/>
      <HGRU11/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 300,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30
  },
});
