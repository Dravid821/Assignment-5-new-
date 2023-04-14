describe("Signup", () => {
  it("should display validation errors for invalid form data", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#submit").click(); // submit the form with empty data
    cy.contains("first Name is Required"); // check if validation error is displayed for first name
    cy.contains("Email is required"); // check if validation error is displayed for email
    cy.contains("Mobile is Require"); // check if validation error is displayed for mobile
    cy.contains("Password are Require"); // check if validation error is displayed for password
    cy.contains("confirm_password is a required field"); // check if validation error is displayed for confirm password
  });
  it("should display validation errors for invalid email and mobile", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#first_name").type("Dravid");
    cy.get("#last_name").type("Solanki");
    cy.get("#email").type("dssdsddsds");
    cy.get("#mobile").type("888Dravid");
    cy.get("#password").type("password@123");
    cy.get("#confirm_password").type("password");
    cy.get("#submit").click(); // submit the form with invalid email and mobil
    cy.contains("Invalid email address"); // check if validation error is displayed for email
    cy.contains("Mobile number can only contain numeric characters"); // check if validation error is displayed for mobile
  });
    it("should display validation error for password mismatch", () => {
      cy.visit("http://localhost:3000/signup");
      cy.get("#first_name").type("John");
      cy.get("#last_name").type("Doe");
      cy.get("#email").type("john.doe@example.com");
      cy.get("#mobile").type("9876543210");
      cy.get("#password").type("password");
      cy.get("#confirm_password").type("password123");
      cy.get("#submit").click(); // submit the form with password mismatch
      cy.contains("Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"); // check if validation error is displayed for password mismatch
    });
  it("Should allow users to sign up", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#first_name").type("Darvid");
    cy.get("#last_name").type("Solanki");
    cy.get("#email").type("dravid123@gmail.com");
    cy.get("#password").type("Dravid@123");
    cy.get("#confirm_password").type("Dravid@123");
    cy.get("#mobile").type("8988898884");
    cy.get("#submit").click();
   
  });
});
