describe("Signup", () => {
    it("Should allow users to sign up", () => {
        cy.visit("http://localhost:3000/signup");
        cy.get("#first_name").type("Darvid");
        cy.get("#last_name").type("Solanki");
        cy.get("#email").type("dravid123@gmail.com");
        cy.get("#password").type("Dravid@123");
        cy.get("#confirm_password").type("Dravid@123");
        cy.get("#mobile").type("8988898884");
        cy.get("#submit").click()
        // cy.url().should("include", "/login");
      });
    });