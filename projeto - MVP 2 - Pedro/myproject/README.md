# MVP Front-End - Pós-graduação Puc Rio - Pedro Henrique Lins de Carvalho

Olá, professores,

Bem-vindos ao meu projeto MVP, desenvolvido para o módulo Front-end da pós-graduação da Puc Rio.

---

## Objetivo da Aplicação:

O projeto tem por objetivo ser um hub de investimentos, focado na parte de ações. O projeto foi inspirado pelos sites Status Invest (https://statusinvest.com.br/) e pela área logada da B3 (https://www.investidor.b3.com.br/login), compilando informações relevantes para o investidor, como carteira atual, transações passadas, bem como em fornecer alguns Dashboards relevantes para o investidor, como "Patrimônio Acumulado", "Composição da Carteira (por setor)". Além disso, a ideia da tela inicial foi de desenvolver um overview para o usuário, como em sites de corretoras e de bancos, mencionando ações recomendadas (ou interessantes para estudar) por setor.

A aplicação em front-end está toda desenvolvida em React JS, e faz uso da Vite e da biblioteca reactchart-js2 para gerar os Dashboards. Vale lembrar que como a aplicação foi feita para avaliação das habilidades de construção de front-end, todos os dados são consultados internamente através de arquivos JSON, de maneira a simular a comunicação e as consultas ao back-end e ao banco de dados.

De forma similar ao exemplo feito em aula (para simular uma compra), criei uma página "Relatórios" em que é possível gerar um relatório e escolher o formato do arquivo, com a mensagem de alerta sendo gerada, de forma parecida ao código do exemplo.

Como foi mencionado que seriam penalizados aplicações que copiassem o código de exemplo, informo que construí o código do zero, com a única coisa sendo reaproveitada sendo a imagem do perfil do usuário (dentro do Header).

---

## Como Rodar a Aplicação:

O projeto foi criado seguindo as instruções para se gerar um projeto novo em React JS e desenvolvido a partir disso. Portanto, para rodar a aplicação, basta garantir que o React está instalado bem como em garantir que a biblioteca react-router-dom e react-chart-js-2 está instalada:

- `npm install`
- `npm install chart.js react-chartjs-2`
- `npm install react-router-dom`

Uma vez instaladas o reactjs e as bibliotecas, basta rodar a aplicação através do comando dentro da partir do diretório "myproject":

- ### `npm start`

Uma vez rodada a aplicação, a mesma será inicializada no browser de forma automática. Caso não seja inicializada automaticamante, basta abrir o localhost abaixo:

- [http://localhost:3000](http://localhost:3000)

### Links Úteis:

Para análise do projeto como um todo, disponibilizo os links correspondentes abaixo:

- YouTube - Gravação da Apresentação: https://www.youtube.com/watch?v=JZ2jbkfk0G0
- Github - Diretório: https://github.com/pedrohcarvalho921/MVP_2-Projeto_Front-End/
- Figma - Projeto Público: https://www.figma.com/design/BQvtsPUWlLUuYrwMbTSDYY/Prototipo-MVP---Desenvolvimento-Front-end-Avan%C3%A7ado-(PUC)?node-id=0-1&t=4lGcBO0B2sUWVAd0-0
- Github - Perfil Pedro: https://github.com/pedrohcarvalho921
