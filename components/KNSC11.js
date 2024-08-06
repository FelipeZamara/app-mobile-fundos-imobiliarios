import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function KNSC11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/KNSC11.png')} />
        <Text>Cotação: R$9,22</Text><Text>DY(12M): 10,53%</Text><Text>Tipo de fundo: fundo de papel</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });