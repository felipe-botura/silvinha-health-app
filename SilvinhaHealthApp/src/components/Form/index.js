import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import ResultImc from './Resultimc'

export default function Form() {
  return (
    <View style={styles.formContext}>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput 
          style={styles.input}
          placeholder='Ex. 1.70'
          keyboardType='numeric'
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput 
          style={styles.input}
          placeholder='Ex. 80.5'
          keyboardType='numeric'
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => alert("O CABO C TÁ AI?")}>
          <Text style={styles.textButton}>
            Calcular IMC
          </Text>
        </TouchableOpacity>
      </View>
      <ResultImc />
    </View>
  )
}