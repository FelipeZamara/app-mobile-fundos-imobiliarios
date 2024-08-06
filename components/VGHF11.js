import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function VGHF11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/VGHF11.png')} />
        <Text>Cotação: R$8,71</Text><Text>DY(12M): 13,43%</Text><Text>Tipo de fundo: fundo de papel</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });