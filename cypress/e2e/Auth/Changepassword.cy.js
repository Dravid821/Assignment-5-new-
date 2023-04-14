describe("change password", () => {
  it("Should Not allow users to changepassword", () => {
    //set data manually to local storage
    cy.window().then((win) => {
      win.localStorage.setItem("isLogin", true);
      win.localStorage.setItem(
        "signUpData",
        JSON.stringify([
          {
            isActive: true,
            first_name: "Dravid",
            last_name: "Solanki",
            mobile: "8988898884",
            email: "dravid123@gmail.com",
            password: "U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE=",
          },
        ])
      );
    });
    cy.visit("http://localhost:3000/changepass");
    // cy.get("#menu").click();
    cy.get("#current_password").type("Darvid@13");
    cy.get("#new_password").type("Dravid@24");
    cy.get("#confirm_password").type("Dravid@24");
    cy.get("#submit").click();
  });

  if (
    ("if should not allowed to change password",
    () => {
      cy.window().then((win) => {
        win.localStorage.setItem("isLogin", true);
        win.localStorage.setItem(
          "signUpData",
          JSON.stringify([
            {
              isActive: true,
              first_name: "Dravid",
              last_name: "Solanki",
              mobile: "8988898884",
              email: "dravid123@gmail.com",
              password: "U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE=",
            },
          ])
        );
      });

      cy.visit("http://localhost:3000/changepass");
      //   cy.get("#menu").click();
      //   cy.get("#changePassword").click();
      cy.get("#password").type("xyz@123");
      cy.get("#newpassword").type("Password@1234");
      cy.get("#cpassword").type("Password@1234");
      cy.get("#submit").click();
      cy.url().should("include", "/");
    })
  );
  it("Should allow users to changepassword", () => {
    //set data manually to local storage
    cy.window().then((win) => {
      win.localStorage.setItem("isLogin", true);
      win.localStorage.setItem(
        "signUpData",
        JSON.stringify([
          {
            isActive: true,
            first_name: "Dravid",
            last_name: "Solanki",
            mobile: "8988898884",
            email: "dravid123@gmail.com",
            password: "U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE=",
          },
        ])
      );
    });
    cy.visit("http://localhost:3000/changepass");
    // cy.get("#menu").click();
    cy.get("#current_password").type("Dravid@123");
    cy.get("#new_password").type("Dravid@234");
    cy.get("#confirm_password").type("Dravid@234");
    cy.get("#submit").click();
  });

  if (
    ("if should allowed to change password",
    () => {
      cy.window().then((win) => {
        win.localStorage.setItem("isLogin", true);
        win.localStorage.setItem(
          "signUpData",
          JSON.stringify([
            {
              isActive: true,
              first_name: "Dravid",
              last_name: "Solanki",
              mobile: "8988898884",
              email: "dravid123@gmail.com",
              password: "U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE=",
            },
          ])
        );
      });

      cy.visit("http://localhost:3000/changepass");
      cy.get("#current_password").type("Dravid@123");
      cy.get("#new_password").type("Dravid@234");
      cy.get("#confirm_password").type("Dravid@234");
      cy.get("#submit").click();
      // cy.url().should("include", "/");
    })
  );
});
