import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Componente from './components/componente';

export default function App() {
  const [inputQtd, setInputQtd] = useState(0);
  const [qtd, setQtd] = useState(0);

  function enviaValor(){
    setQtd(inputQtd);
  }
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Quantidade de Pessoas </Text>
        <TextInput
          style={styles.input}
          value={inputQtd}
          onChangeText={(value) => setInputQtd(value)}
        />
      </View>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}> Calcular </Text>
      </ TouchableOpacity>
      <Componente qtd={qtd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bloco: {
    width: '100%',
    marginBottom: 20,
  },
  textoBloco: {
    color:'#148F77',
    marginLeft: '10%',
    fontSize: 20,
  },
  input: {
    color:'#148F77',
    borderWidth: 1,
    width: '80%',
    marginLeft: '10%',
    borderRadius: 10,
    fontSize: 20,
  },
  botao:{
    width: '80%',
    marginLeft: '10%',
    borderRadius: 10,
    backgroundColor:'#148f77',
    marginBottom:20
  },
  textoBotao: {
    color:'#148F77',
    marginLeft: '10%',
    fontSize: 20,
    color:"#FFF"
  },
});
