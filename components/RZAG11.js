import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function RZAG11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/RZAG11.png')} />
        <Text>Cotação: R$8,30</Text><Text>DY(12M): 16,33%</Text><Text>Tipo de fundo: outro</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });