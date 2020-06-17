const expectedRepositories = [
  'viking-web-dev',
  'viking-log',
  'learn-typescript',
  'FormidableForms',
  'test',
  'gog-test',
  'github-actions-with-hasura-and-docker',
  'react-testing',
  'nestjs-testing'
];

describe('web-ui', () => {
  let NX_GITHUB_API_TOKEN;

  before(() => {
    NX_GITHUB_API_TOKEN = Cypress.env('NX_GITHUB_API_TOKEN');
  });

  beforeEach(() => cy.visit('/'));

  it('should redirect to the enter token page', () => {
    cy.url().should('include', 'enter-token');
  });

  it('should redirect to repos page after sumbitting a valid token', () => {
    cy.visit('/enter-token');
    cy.get('input#enter_token').type(NX_GITHUB_API_TOKEN);
    cy.contains('Submit').click();
    cy.url().should('include', 'repositories');
    expectedRepositories.forEach(repoName => cy.contains(repoName));
  });

  it('should clear the token when "Clear Token" is pressed and redirects to enter token', () => {
    cy.visit('/enter-token');
    cy.get('input#enter_token').type(NX_GITHUB_API_TOKEN);
    cy.contains('Submit').click();
    cy.url().should('include', 'repositories');
    cy.get('button#clear_token').click();
    cy.url().should('not.include', 'repositories');
    cy.url().should('include', 'enter-token');
  });
});
