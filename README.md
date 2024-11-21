Calculadora de Substituição de Alimentos
Descrição
Este é um aplicativo móvel desenvolvido em React Native com o objetivo de auxiliar na substituição de alimentos de forma prática e personalizada. Criado como parte de um projeto de extensão universitária, o app permite que os usuários selecionem alimentos e vejam substituições adequadas com suas respectivas quantidades equivalentes.

Funcionalidades
Seleção de grupos alimentares e alimentos específicos.
Exibição de substitutos com suas quantidades equivalentes.
Navegação entre telas para maior organização e acessibilidade.
Link para um formulário de sugestões para novos alimentos.
Tecnologias Utilizadas
React Native: Para o desenvolvimento da interface e lógica do app.
Expo Online: Para simplificar o desenvolvimento sem a necessidade de instalações locais.
React Navigation: Para a navegação entre a tela principal e a de resultados.
Postman Mock Server: Para simulação e gerenciamento da API.
Estrutura do Projeto
App.js:
Tela principal com seleção de grupo alimentar e alimento.
Navegação para a tela de resultados.
Resultado.js:
Tela que exibe os substitutos de forma organizada.
Botão para retornar à tela principal.
API:
Dados simulados via Postman, retornando grupos alimentares, alimentos e substitutos.
Uso de valores padrão para facilitar comparações nutricionais.
Instalação e Uso
Clone este repositório:
bash
Copiar código
git clone https://github.com/seuusuario/calculadora-substituicao.git
Acesse o projeto no Expo Online (ou localmente, se preferir).
Instale as dependências:
Copiar código
npm install
Inicie o projeto:
sql
Copiar código
expo start
Utilize o QR code gerado para rodar o app no celular ou no emulador.
Demonstração
Tela Principal
Aqui o usuário pode selecionar o grupo alimentar e o alimento desejado. Após a seleção, ele pode visualizar as substituições disponíveis.

Tela de Resultados
A tela exibe as substituições com suas respectivas quantidades equivalentes e permite retornar à tela principal.

Dados da API
Exemplo de Estrutura:
json
Copiar código
{
    "grupos": [
        {
            "id": "1",
            "nome": "Cereais",
            "alimentos": [
                {
                    "nome": "Arroz Branco",
                    "quantidadePadrao": "100g",
                    "substitutos": [
                        { "nome": "Arroz Integral", "quantidadeEquivalente": "80g" },
                        { "nome": "Quinoa", "quantidadeEquivalente": "70g" }
                    ]
                }
            ]
        }
    ]
}
Motivação
Este projeto foi desenvolvido para atender à necessidade de uma ferramenta prática para facilitar a substituição de alimentos, principalmente no contexto de consultas nutricionais. O app oferece uma solução que promove escolhas alimentares mais conscientes e alinhadas com os objetivos de saúde dos usuários.