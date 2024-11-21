import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/styles';

export default function Resultado({ route, navigation }) {
    const { resultado } = route.params;

    // Dividir o resultado em título e substitutos
    const [titulo, ...substitutos] = resultado.split(', ');

    return (
        <View style={styles.cardContainer}>
            {/* Botão para voltar */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Escolher outro alimento</Text>
            </TouchableOpacity>

            {/* Título */}
            <Text style={styles.header}>Resultado</Text>

            {/* Texto inicial */}
            <Text style={styles.resultadoTitulo}>{titulo}</Text>

            {/* Lista de substitutos */}
            <View style={styles.listaContainer}>
                {substitutos.map((substituto, index) => (
                    <View key={index} style={styles.listItem}>
                        <Text style={styles.resultado}>{substituto}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
