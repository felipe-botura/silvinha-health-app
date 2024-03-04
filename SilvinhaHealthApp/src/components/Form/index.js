import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function Form() {
  return (
    <View style={styles.formContext}>
      <View style={styles.formGroup}>
        <Text>Altura</Text>
        <TextInput />
        <Text>Peso</Text>
        <TextInput />
        <TouchableOpacity onPress={() => alert("O CABO C TÁ AI?")}>
          <Text>Calcular IMC</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}