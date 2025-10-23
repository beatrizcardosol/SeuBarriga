import { faker } from "@faker-js/faker";

describe("CT01 - Criação de movimentação com todos os campos válidos", () => {
  beforeEach(() => {
    cy.login("bia@teste.com.br", "123456");
    cy.contains("Criar Movimentação").click();
  });

  it("Validação da criação de movimentação da conta com todos os campos válidos", () => {
    const descricao = faker.commerce.productName();
    const interessado = faker.person.fullName();
    const valor = faker.finance.amount(100, 2000, 2);

    cy.get("#tipo").select("Receita");
    cy.get("#data_transacao").type("23/10/2025");
    cy.get("#data_pagamento").type("23/10/2025");
    cy.get("#descricao").type(descricao);
    cy.get("#interessado").type(interessado);
    cy.get("#valor").type(valor);
    cy.get("#conta").select('1');
    cy.contains("Pago").click();
    cy.contains("Salvar").click();

    cy.get(".alert").should("contain", "Movimentação adicionada com sucesso!");
  });
});

describe('CT02 - Criação de movimentação com campos em branco', () => {
  beforeEach(() => {
    cy.login('bia@teste.com.br', '123456');
    cy.contains('Criar Movimentação').click();
  });

  it('Validação da criação de movimentação da conta com campos em branco', () => {
    cy.contains('Salvar').click();

    cy.get('.alert').should('contain', 'Data da Movimentação é obrigatório');
    cy.get('.alert').should('contain', 'Data do pagamento é obrigatório');
    cy.get('.alert').should('contain', 'Descrição é obrigatório');
    cy.get('.alert').should('contain', 'Interessado é obrigatório');
    cy.get('.alert').should('contain', 'Valor é obrigatório');
    cy.get('.alert').should('contain', 'Valor deve ser um número');
  });
});

describe('CT09 - Criação de movimentação com campo Valor preenchido com letras', () => {
  beforeEach(() => {
    cy.login('bia@teste.com.br', '123456');
    cy.contains('Criar Movimentação').click();
  });

  
  it('Validação da criação de movimentação da conta com campo Valor preenchido com letras', () => {
    const descricao = faker.commerce.productName();
    const interessado = faker.person.fullName();
    const valorInvalido = 'abcde';

    cy.get('#tipo').select('Receita');
    cy.get("#data_transacao").type("23/10/2025");
    cy.get("#data_pagamento").type("23/10/2025");
    cy.get('#descricao').type(descricao);
    cy.get('#interessado').type(interessado);
    cy.get('#valor').type(valorInvalido);
    cy.get('#conta').select('1');
    cy.contains('Pago').click();
    cy.contains('Salvar').click();

    cy.get('.alert').should('contain', 'Valor deve ser um número');
  });
});
