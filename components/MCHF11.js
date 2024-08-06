import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function MCHF11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/MCHF11.png')} />
        <Text>Cotação: R$9,05</Text><Text>DY(12M): 6,30%</Text><Text>Tipo de fundo: fundo de fundos</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });