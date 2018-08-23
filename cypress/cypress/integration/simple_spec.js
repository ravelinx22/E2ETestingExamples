describe('Los estudiantes login and create account', function() {
    it('Visits los estudiantes and does login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wr.ravelo@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("Test123456")
        cy.get('.cajaLogIn').contains('Ingresar').click()
    })

    it('Visits los estudiantes and fails to create an already registered account', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("William")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Ravelo")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("wr.ravelo@uniandes.edu.co")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("Test123456")
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("12")
        cy.get('.cajaSignUp').find('input[name="acepta"]').click()
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Error: Ya existe un usuario registrado con el correo')
    })
})

describe('Searches a professor and enters to its detail', function() {
    it('Searches un profesor', function() {
        cy.visit('https://losestudiantes.co')
        cy.server()
        cy.route('/universidades/universidad-de-los-andes/administracion/buscar/*').as('search')
        cy.contains('Cerrar').click()
        cy.get('.Select-control').click()
        cy.focused().type("Mario Linares Vasquez", { force: true });
        cy.wait("@search").then((xhrs) => {
          cy.get(".Select-option").first().click()
          cy.contains('Califica a este profesor')
        })
    })

    it('Visits professor page', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get(".profesor").first().find("a").click()
        cy.contains('Califica a este profesor')
    })

    it('Uses filters by class of a profesor', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
        cy.get(".materias").find('input[name="id:ISIS3510"]').should("not.be.checked")
        cy.get(".materias").find('input[name="id:ISIS3510"]').check()
        cy.get(".materias").find('input[name="id:ISIS3510"]').should("be.checked")
    })
})
