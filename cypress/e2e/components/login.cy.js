describe("login", () => {
    it("if invalid Credential",()=>{
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",true)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive:true,
                    first_name:"Dravid",
                    last_name:"Solanki",
                    mobile:"8988898884",
                    email:"dravid123@gmail.com",
                    password:"U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/E="
                }
            ])
            )
        });
        cy.visit("http://localhost:3000/login");
        cy.get("#email").type("dravid123@gmail.com");
        cy.get("#password").type("Dravid@123"); 
        cy.get("#submit").click();
        // cy.url().should("include", "/cardmap");
    });
    it("Should allow users to login", () => {
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",true)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive:true,
                    first_name:"Dravid",
                    last_name:"Solanki",
                    mobile:"8988898884",
                    email:"dravid13@gmail.com",
                    password:"U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE="

                }
            ])
            )
        });
        cy.visit("http://localhost:3000/login"); 
        cy.get("#email").type("dravid123@gmail.com");
        cy.get("#password").type("Dravid@123");
        cy.get("#submit").click();
      });
});