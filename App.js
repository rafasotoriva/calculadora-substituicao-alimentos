import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import fetchSubstituicoes from './data/api';
import styles from './styles/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'react-native';
import Resultado from './Resultado.js';

const Stack = createStackNavigator();

function TelaPrincipal({ navigation }) {
    const [grupos, setGrupos] = useState([]);
    const [alimentos, setAlimentos] = useState([]);
    const [grupoSelecionado, setGrupoSelecionado] = useState('');
    const [alimentoSelecionado, setAlimentoSelecionado] = useState('');
    const [resultado, setResultado] = useState('');

    // *** Adicionando a chamada da API com useEffect ***
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchSubstituicoes(); // Chama a função da API
                setGrupos(data.grupos || []); // Atualiza os grupos com os dados da API
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        loadData(); // Executa a busca ao montar o componente
    }, []);

    // Atualizar lista de alimentos ao mudar o grupo
    const handleGrupoChange = (grupo) => {
        setGrupoSelecionado(grupo);
        const grupoEncontrado = grupos.find((g) => g.nome === grupo);
        setAlimentos(grupoEncontrado ? grupoEncontrado.alimentos : []);
        setAlimentoSelecionado('');
        setResultado('');
    };

    // Calcular substitutos e navegar para a tela de resultados
    const calcularSubstituto = () => {
        if (!alimentoSelecionado) {
            alert('Selecione um alimento para ver os substitutos.');
            return;
        }

        const alimentoEncontrado = alimentos.find((a) => a.nome === alimentoSelecionado);

        if (alimentoEncontrado) {
            const quantidadePadrao = alimentoEncontrado.quantidadePadrao;
            const substitutos = alimentoEncontrado.substitutos.map(
                (sub) => `${sub.nome} (${sub.quantidadeEquivalente})`
            ).join(', ');

            const resultadoFinal = `Para ${quantidadePadrao} de ${alimentoSelecionado} pode usar, ${substitutos}`;
            navigation.navigate('Resultado', { resultado: resultadoFinal });
        } else {
            alert('Alimento não encontrado na lista.');
        }
    };

    return (
        <View style={styles.cardContainer}>
            <Image source={require('./assets/Logo.png')} style={styles.logo} />
            <Text style={styles.header}>Calculadora de Substituição de Alimentos</Text>

            {/* Picker para Grupo Alimentar */}
            <Picker selectedValue={grupoSelecionado} onValueChange={handleGrupoChange} style={styles.input}>
                <Picker.Item label="Selecione o Grupo Alimentar" value="" />
                {grupos.map((grupo) => (
                    <Picker.Item key={grupo.id} label={grupo.nome} value={grupo.nome} />
                ))}
            </Picker>

            {/* Picker para Alimento */}
            <Picker
                selectedValue={alimentoSelecionado}
                onValueChange={setAlimentoSelecionado}
                style={styles.input}
                enabled={alimentos.length > 0}
            >
                <Picker.Item label="Selecione o Alimento" value="" />
                {alimentos.map((alimento) => (
                    <Picker.Item key={alimento.nome} label={alimento.nome} value={alimento.nome} />
                ))}
            </Picker>

            {/* Botão para calcular substituto */}
            <TouchableOpacity style={styles.button} onPress={calcularSubstituto}>
                <Text style={styles.buttonText}>Ver opções de substituição</Text>
            </TouchableOpacity>

            {/* Link do forms para sugestão de alimento */}
            <TouchableOpacity 
                onPress={() => {
                    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSfg8Xrm77pSsgqlYchL2fgUv6hkdRvM5YOA90ZX7t_w3rZ_wg/viewform')
                    .catch(err => console.error('Erro ao abrir o link:', err));
                }}
            >
                <Text style={styles.link}>Não encontrou seu alimento?</Text>
            </TouchableOpacity>

        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ title: 'Calculadora' }} />
                <Stack.Screen name="Resultado" component={Resultado} options={{ title: 'Resultado' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}