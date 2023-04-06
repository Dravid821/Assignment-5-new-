describe("password change", () => {
    it("Should allow users to changepassword", () => {
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",true)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive:true,
                    FirstName:"Dravid",
                    LastName:"Solanki",
                    Mobile_No:"8988898884",
                    Email:"dravid123@gmail.com",
                    Password:"U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE="

                }
            ])
            )
        });
        cy.visit("http://localhost:3000/");
        cy.get("#changePassword").click();
        cy.get("#password").type("Test@123");
        cy.get("#newpassword").type("Password@1234");
        cy.get("#cpassword").type("Password@1234");
        cy.get("#submit").click();
        cy.url().should("include", "/login");
      });
 

    if("if should not allowed to change password",()=>{
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",true)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive:true,
                    FirstName:"Dravid",
                    LastName:"Solanki",
                    Mobile_No:"8988898884",
                    Email:"dravid123@gmail.com",
                    Password:"U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE="
                }
            ])
            )
        });
        cy.visit("http://localhost:3000/");
        cy.get("#menu").click();
        cy.get("#changePassword").click();
        cy.get("#password").type("xyz@123");
        cy.get("#newpassword").type("Password@1234");
        cy.get("#cpassword").type("Password@1234");
        cy.get("#submit").click();
        cy.url().should("include", "/");
        
    });
});