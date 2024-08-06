import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function CPTS11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/CPTS11.png')} />
        <Text>Cotação: R$8,18</Text><Text>DY(12M): 10,62%</Text><Text>Tipo de fundo: fundo de papel</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });