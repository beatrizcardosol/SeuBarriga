🧾 Projeto de Testes Automatizados – Seu Barriga
Programa de Quality Assurance – Escola Atlântico Avanti

Este repositório faz parte do projeto de Quality Assurance (QA) desenvolvido durante a formação na Escola Atlântico Avanti.
O objetivo é aplicar práticas de automação de testes end-to-end utilizando Cypress, validando as principais funcionalidades da aplicação Seu Barriga
.

📘 Sobre a plataforma "Seu Barriga"

O Seu Barriga é uma aplicação web criada por Wagner Aquino com o propósito de simular um sistema de controle financeiro pessoal.
Ela é amplamente utilizada para treinamento e prática de automação de testes, permitindo que os usuários:

Cadastrem e gerenciem contas bancárias;

Registrem movimentações financeiras (receitas e despesas);

Visualizem saldos e relatórios financeiros;

Realizem login e autenticação de forma simples e segura.

🧩 Funcionalidade sob minha responsabilidade

Neste projeto, fiquei responsável por automatizar a funcionalidade de criação de movimentações financeiras.
Os testes verificam se o sistema responde corretamente em diferentes cenários, tanto positivos quanto negativos, garantindo a qualidade e confiabilidade da aplicação.

🔍 Cenários testados
ID	Cenário	Tipo	Resultado Esperado
CT01	Criação de movimentação com todos os campos válidos	Positivo	Exibir mensagem de sucesso e cadastrar movimentação
CT02	Criação de movimentação com campos obrigatórios em branco	Negativo	Exibir mensagens de erro informando os campos obrigatórios
CT03	Criação de movimentação com data inválida	Negativo	Exibir alerta de data inválida
CT09	Criação de movimentação com campo Valor preenchido com letras	Negativo	Exibir mensagem “Valor deve ser um número”

Esses testes validam regras de negócio, tratamento de erros e mensagens exibidas ao usuário.

🧰 Tecnologias utilizadas
Tecnologia	Finalidade
JavaScript (ES6)	Linguagem utilizada nos scripts de teste
Cypress	Framework para automação de testes end-to-end
Faker.js	Geração de dados aleatórios para os testes
Node.js	Ambiente de execução
Git / GitHub	Controle de versão e hospedagem do código
🚀 Estrutura do projeto
cypress/
├── e2e/
│   └── criar-movimentacao-tests/
│       └── criar-movimentacao.cy.js     # Casos de teste da funcionalidade
├── fixtures/                             # Massa de dados (mock)
├── support/
│   ├── commands.js                       # Comandos customizados
│   └── e2e.js                            # Configuração global
cypress.config.js                         # Configuração principal do Cypress
package.json                              # Dependências do projeto

▶️ Como executar o projeto
1. Clonar o repositório
git clone https://github.com/beatrizcardosol/SeuBarriga.git
cd SeuBarriga

2. Instalar as dependências
npm install

3. Executar os testes no modo interativo
npx cypress open

4. Executar os testes no modo headless (terminal)
npx cypress run

🧠 Aprendizados e resultados

Durante o desenvolvimento deste projeto de QA na Escola Atlântico Avanti, foram aplicadas boas práticas como:

Escrita de testes independentes e reutilizáveis;

Uso de page objects e comandos customizados;

Validação de mensagens de erro e sucesso;

Geração dinâmica de dados com Faker.js;

Garantia da cobertura de testes em cenários críticos da aplicação.

👩‍💻 Autora

Ana Beatriz Cardoso Araújo de Oliveira
📚 Estudante de Análise e Desenvolvimento de Sistemas
🎓 Projeto desenvolvido no curso de Quality Assurance – Escola Atlântico Avanti
💡 Foco em QA e Automação de Testes com Cypress
🔗 GitHub
