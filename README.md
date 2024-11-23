# Calculadora de Substituição de Alimentos

Este projeto é uma aplicação React Native desenvolvida para auxiliar pacientes e profissionais da área de nutrição na substituição de alimentos de forma prática e personalizada.

---

## Funcionalidades

- **Seleção de grupos alimentares e alimentos específicos**: Permite a escolha do grupo e do alimento para visualizar substituições.
- **Exibição de substitutos com suas quantidades equivalentes**: Garante substituições práticas e informativas.
- **Simulação de API com Postman**: Os dados dos alimentos e substituições são carregados a partir de uma API mockada.
- **Compatibilidade com Expo Online**: O app foi desenvolvido e testado no Expo, para simplificar o processo de desenvolvimento.

---

## Tecnologias Utilizadas

- **React Native**: Desenvolvimento de interface e lógica do aplicativo.
- **Expo**: Utilizado para facilitar o desenvolvimento e teste sem necessidade de configuração local complexa.
- **Postman Mock Server**: Para simular e gerenciar a API utilizada pelo aplicativo.
- **@react-navigation**: Gerenciamento de navegação entre telas.

---

## Como Testar o Aplicativo

1. **Pré-requisitos**:
   - Baixe o aplicativo Expo Go no seu celular (disponível na Play Store e App Store).

2. **Execute o App**:
   - Abra o Expo Go no seu celular.
   - Copie e cole no seu navegador o link fornecido e ele direcionará para o app: exp://u.expo.dev/933fd9c0-1666-11e7-afca-d980795c5824?runtime-version=exposdk%3A51.0.0&channel-name=production&snack=%40rafaela_sotoriva%2Fcalculadora-de-sub-de-alimentos&snack-channel=Mio7MijUFV.

---

## Seguindo a Ementa da Disciplina

O desenvolvimento deste projeto seguiu os tópicos da ementa da disciplina, como descrito abaixo:

1. **Sintaxe e Componentes do React Native**:
   - Uso de JSX para criar componentes reutilizáveis.
   - Gerenciamento de estado com `useState` e `useEffect`.

2. **Interface Gráfica**:
   - Criação de telas intuitivas com React Native.
   - Integração de estilos personalizados via arquivo externo.

3. **Persistência de Dados**:
   - Simulação de persistência através da API mockada no Postman.

4. **Conexão Remota**:
   - Implementação de chamadas GET à API mockada no Postman.

5. **Navegação Avançada**:
   - Uso do pacote `@react-navigation` para transição entre telas.

---

## Estrutura do Projeto

- **`App.js`**: Tela principal com a seleção de grupos alimentares e alimentos.
- **`Resultado.js`**: Tela que exibe as substituições alimentares com suas quantidades equivalentes.
- **`api.js`**: Conexão com a API mockada no Postman para buscar os dados.
- **`styles.js`**: Arquivo de estilos para padronizar a interface.

---

**Nota:** O app foi desenvolvido na versão **Expo SDK 51.0.0**. Certifique-se de que sua versão do Expo Go é compatível.
