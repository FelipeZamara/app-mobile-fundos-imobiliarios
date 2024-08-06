import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function VGIR11() {
    return(
    <View style={styles.tudo}>
        <Image source={require('../assets/VGIR11.png')} />
        <Text>Cotação: R$9,89</Text><Text>DY(12M): 13,65%</Text><Text>Tipo de fundo: fundo de papel</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    tudo: {
      marginBottom: 30,
    },
  });