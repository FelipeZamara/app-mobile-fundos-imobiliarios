import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function XPCA11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/XPCA11.png')} />
        <Text>Cotação: R$8,11</Text><Text>DY(12M): 15,99%</Text><Text>Tipo de fundo: outro</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });