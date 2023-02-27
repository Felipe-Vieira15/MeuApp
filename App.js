import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <SurpresaScreen />
      <SobreScreen />
      <ContatoScreen />
      <StatusBar style="auto" />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.header}>
      <Text style={{color: '#fff'}}>Sou a homescreen</Text>
    </View>
  );
}
function SobreScreen() {
  return (
    <View style={styles.sobre}>
      <Text style={{color: '#fff'}}>Felipe</Text>
      <Text style={{color: '#fff'}}>olá</Text>
      <Text style={{color: '#fff'}}>Trabalhe pelo futuro que quer, ou não reclame do futuro que vai ter</Text>
    </View>
  );
}
function ContatoScreen() {
  return (
    <View style={styles.contato}>
      <Text style={{color: '#fff'}}>Caso queira fazer contato mande um email para felipe.vieira@alunos.sc.senac.br</Text>
    </View>
  );
}
function SurpresaScreen() {
  return (
    <View style={styles.surpresa}>
      <Text style={{color: '#32cd32'}}>GO LOUD!!!</Text>
      <Text></Text>
      <Text></Text>
      <Image source={{
        uri: 'https://picsum.photos/300/300'
      }
    }
      style={{
        height: '300px',
        width: '300px'
      }
    }
      />
    </View>
  );
}
// SobreScreen
//Seu nome e um oi e uma frase de impacto!

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  header: {
    padding: '50px',
    textAlign: 'left',
  },
  surpresa: {
    padding: '50px',
    borderWidth: '3px',
    borderColor: '#32cd32',
    borderRadius: '5px',
  },
  contato: {
    padding: '50px',
  },


});
