describe("edit profile", () => {
    it("Invalide Email Entered.", () => {
        //set data manually to local storage
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",true)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive: true,
                    first_name: "",
                    last_name: "",
                    mobile: "",
                    email: "",

                }
            ])
            )
        });
        cy.visit("http://localhost:3000/editprofile");
        cy.get("#first_name").type("Dravid");
        cy.get("#last_name").type("Solanki");
        cy.get("#email").type("Dravid121gmail.com");
        cy.get("#mobile").type("8989898999");
        cy.get("#submit").click();
        // cy.url().should("include", "/");
      });
      it("Invalide Mobile Number", () => {
        //set data manually to local storage
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",true)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive: true,
                    first_name: "",
                    last_name: "",
                    mobile: "",
                    email: "",

                }
            ])
            )
        });
        cy.visit("http://localhost:3000/editprofile");
        cy.get("#first_name").type("Dravid");
        cy.get("#last_name").type("Solanki");
        cy.get("#email").type("dravid@gmail.com");
        cy.get("#mobile").type("898989dsd9");
        cy.get("#submit").click();
        // cy.url().should("include", "/");
      });
    it("Should allow edit profile", () => {
        //set data manually to local storage
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",true)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive: true,
                    first_name: "",
                    last_name: "",
                    mobile: "",
                    email: "",

                }
            ])
            )
        });
        cy.visit("http://localhost:3000/editprofile");
        cy.get("#first_name").type("Dhaval");
        cy.get("#last_name").type("Solanki");
        cy.get("#email").type("dravid3@gmail.com");
        cy.get("#mobile").type("9898988998");
        cy.get("#submit").click();
        // cy.url().should("include", "/");
      });

      
    })