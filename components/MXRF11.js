import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function MXRF11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/MXRF11.png')} />
        <Text>Cotação: R$10,06</Text><Text>DY(12M): 12,43%</Text><Text>Tipo de fundo: fundo de papel</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });