import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function BCFF11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/BCFF11.png')} />
        <Text>Cotação: R$8,24</Text><Text>DY(12M): 10,30%</Text><Text>Tipo de fundo: fundo de fundos</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });