import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Componente(props) {
  return (
   <>
   <View style={styles.bloco}>
      <Text style={styles.texto}> Número de Pessoas = {props.qtd} </Text>
      <Text style={styles.texto}> Refrigerante = {(props.qtd * 600)/1000} Litros </Text>
      <Text style={styles.texto}> Água = {(props.qtd * 200)/1000} Litros </Text>
      <Text style={styles.texto}> Bolo  = {(props.qtd * 100)/1000} Kilos</Text>
      <Text style={styles.texto}> Doces = {props.qtd * 3} Unidades </Text>
      <Text style={styles.texto}> Salgadinhos = {props.qtd * 10} Unidades </Text>
  </View>
   </>
  );
}

const styles = StyleSheet.create({
  bloco:{
    marginLeft:'10%',
    marginRight:'10%',
    borderWidth:5,
    borderRadius:10
  },
  texto:{
    fontSize:20,
     color:'#148F77',
  },
  
});
