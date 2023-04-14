describe("login", () => {
    it("if invalid Credential",()=>{
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",false)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive:false,
                    first_name:"Dravid",
                    last_name:"Solanki",
                    mobile:"8988898884",
                    email:"dravid@gmail.com",
                    password:"U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/E="
                }
            ])
            )
        });
        cy.visit("http://localhost:3000/login");
        cy.get("#email").type("dravid123@gmail.com");
        cy.get("#password").type("Dravid@123"); 
        cy.get("#submit").click();
        cy.contains("Invalid Data Entered."); // check if validation error is displayed for password
        cy.contains("Invalid Data Entered.");
        cy.contains("Invalid Data Entered.");
    });
    it("Should allow users to login", () => {
        cy.window().then((win)=>{
            win.localStorage.setItem("isLogin",false)
            win.localStorage.setItem("signUpData",
            JSON.stringify([
                {
                    isActive:false,
                    first_name:"Dravid",
                    last_name:"Solanki",
                    mobile:"8988898884",
                    email:"dravid@gmail.com",
                    password:"U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE="

                }
            ])
            )
        });
        cy.visit("http://localhost:3000/login"); 
        cy.get("#email").type("dravid@gmail.com");
        cy.get("#password").type("Dravid@123");
        cy.get("#submit").click();
      });
});

// describe('Login page', () => {
//     beforeEach(() => {
//       cy.visit('http://localhost:3000/login') // replace with your login page URL
//     })
  
//     it('logs in successfully with valid credentials', () => {
//         cy.window().then((win)=>{
//                          win.localStorage.setItem("isLogin",true)
//                        win.localStorage.setItem("signUpData",
//                        JSON.stringify([
//                              {
//                                 isActive:true,
//                                 first_name:"Dravid",
//                                 last_name:"Solanki",
//                                 mobile:"8988898884",
//                                 email:"dravid13@gmail.com",
//                                 password:"U2FsdGVkX19eCusNjGZv8OlL8AK3WUer20aRQV9o/fE="
            
//                              }
//                          ])
//                          )
//       cy.get("#email").type('user@example.com')
//       cy.get("#password").type('password123')
//       cy.get("#submit").click()
  
//       cy.url().should('eq', 'http://localhost:3000/product') // replace with your expected redirect URL
//     })
  
//     it('shows an error message with invalid credentials', () => {
//       cy.get('input[type="email"]').type('invaliduser@example.com')
//       cy.get('input[type="password"]').type('invalidpassword')
//       cy.get('button[type="submit"]').click()
  
//       cy.contains('Invalid email or password').should('be.visible') // replace with your error message
//     })
// })