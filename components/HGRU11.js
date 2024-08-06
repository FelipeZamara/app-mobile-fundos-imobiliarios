import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function HGRU11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/HGRU11.png')} />
        <Text>Cotação: R$127,04</Text><Text>DY(12M): 9,48%</Text><Text>Tipo de fundo: fundo misto</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });