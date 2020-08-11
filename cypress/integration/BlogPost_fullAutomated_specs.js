beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!');
    cy.server()
    // cy.route('GET', 'posts?id=suryakantkumar4455@gmail.com', 'fixture:posts.json').as('getPosts');
    cy.route('GET', 'posts*', 'fixture:posts.json').as('getPosts');
    cy.route('POST', 'posts', 'fixture:postResponse.json').as('createPost');
    cy.route('GET', ' http://localhost:3004/users*', 'fixture:getUserResponse.json').as('getUser');
    cy.route('POST', ' http://localhost:3004/users', 'fixture:postUserResponse.json').as('getUser');
})

describe("React Blog cypress Test",()=>{
    it('Login -> Preview Blog Page', () => {
        cy.visit('http://localhost:3000');
        cy.get("button")
            .contains("Login")
            .click()
        cy.get("body")
            .then($body => {
            if ($body.find('#auth0-lock-container-1').length > 0) {
                cy.get('.auth0-lock-name').contains("react-blog-post");
                cy.get('input#1-email')
                    .type("suryakantkumar4455@gmail.com");
                cy.get('input.auth0-lock-input[type="password"]')
                    .type("Heartbit@14");
                cy.get('button.auth0-lock-submit').click();
            }
                cy.get('.MuiTabs-flexContainer').contains("Blog").click();
                cy.url().should('include', '/blogs');
                cy.get('.MuiGrid-root > h6').contains("A Blog About All And Life");
                cy.get('.MuiGrid-root > h4').contains("Welcome to Home Blog. Start creating new post!");
                cy.get('.MuiCard-root').its('length').should("eq",2);
                cy.get('.MuiCardHeader-action button').first().click();
                cy.get('.MuiPopover-paper >ul >li').contains("Preview").click();
                cy.url().should('include', 'blogs/preview');
            })
    })
    it('Login -> Create Post', () => {
        cy.visit('http://localhost:3000');
        cy.get("button")
            .contains("Login")
            .click()
        cy.get("body")
            .then($body => {
                if ($body.find('#auth0-lock-container-1').length > 0) {
                    cy.get('.auth0-lock-name').contains("react-blog-post");
                    cy.get('input#1-email')
                        .type("suryakantkumar4455@gmail.com");
                    cy.get('input.auth0-lock-input[type="password"]')
                        .type("Heartbit@14");
                    cy.get('button.auth0-lock-submit').click();
                }
                cy.get('.MuiTabs-flexContainer').contains("Blog").click();
                cy.url().should('include', '/blogs');
                cy.get('.MuiGrid-root > h6').contains("A Blog About All And Life");
                cy.get('.MuiGrid-root > h4').contains("Welcome to Home Blog. Start creating new post!");
                cy.get('.MuiCard-root').its('length').should("eq",2);
                cy.get('button').contains("Create").click();
                cy.url().should('include', '/blogs/create');
                cy.get('input#post_title').type("Create post -> stubbed in fixtures!");
                cy.get('textarea#post_body').type("This post is about Cypress fixtures. Its work like dummy data storage");
                cy.fixture('dummy.png').as('dummy')
                cy.get('input#post_image').then(function(subject) {
                    return Cypress.Blob.base64StringToBlob(this.dummy, 'image/png')
                        .then((blob) => {
                            const testFile = new File([blob], "dummy.png", { type: 'application/png' });
                            const dataTransfer = new DataTransfer();
                            const fileInput = subject[0];
                            dataTransfer.items.add(testFile);
                            fileInput.files = dataTransfer.files;
                            cy.wrap(subject).trigger('change', { force: true });
                        })
                })
                cy.get('button').contains("Publish").click();

            })
    })
})