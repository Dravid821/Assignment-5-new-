describe("navbar", () => {
    it("Product Data Show", () => {
        //set data manually to local storage
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",true)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive: true,
                    first_name: "Dravid",
                    last_name: "Solanki",
                    mobile: "8988898884",
                    email: "dravid123@gmail.com",
                    password: "U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/E=",

                }
            ])
            )
        });
        cy.visit("http://localhost:3000/product");
       
      });
    })