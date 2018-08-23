var assert = require('assert');
describe('los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });

    // New Tests
    it('should visit los estudiantes and failed at sign up', function () {
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaSignUp = browser.element('.cajaSignUp');

        var nameInput = cajaSignUp.element('input[name="nombre"]');
        nameInput.click();
        nameInput.keys('William ');

        var apellidoInput = cajaSignUp.element('input[name="apellido"]');
        apellidoInput.click();
        apellidoInput.keys('Ravelo');

        var mailInput = cajaSignUp.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys('wr.ravelo@uniandes.edu.co');

        var passwordInput = cajaSignUp.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys('Test123456');

        var programSelector = cajaSignUp.element('select[name="idPrograma"]');
        programSelector.selectByValue("12");

        var acceptTerms = cajaSignUp.element('input[name="acepta"]');
        acceptTerms.click();

        cajaSignUp.element('button=Registrarse').click()

        browser.waitForVisible('.text-muted.lead', 5000);
        var alertText = browser.element('.text-muted.lead').getText();
        expect(alertText).toContain('Error: Ya existe un usuario registrado con el correo');
    });

    it('should search for a professor and visit its page', function () {
        browser.url('https://losestudiantes.co');

        browser.waitForVisible('.Select-control', 5000);
        var searchInput = browser.element('.Select-control');
        searchInput.click();
        searchInput.keys("Mario Linares");

        browser.waitForVisible('.Select-option', 5000);
        var option = browser.element('.Select-option');
        option.click();
        browser.pause(3000);

        browser.waitForVisible('.nombreProfesor', 5000);
        var nombreProfesor = browser.element('.nombreProfesor').getText();
        expect(nombreProfesor).toBe('Mario Linares Vasquez');
    });
});
