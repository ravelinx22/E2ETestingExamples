module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login falied': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .pause(1000) // Agregue esta linea porque me estaba fallando aveces
      .click('.botonIngresar')
      .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
      .setValue('.cajaLogIn input[name="password"]', '1234')
      .click('.cajaLogIn .logInButton')
      .waitForElementVisible('.aviso.alert.alert-danger', 4000)
      .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
      .end();
  },
  'Visits professor page': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.profesor > a:nth-child(1)', 4000)
      .click('.profesor > a:nth-child(1)')
      .click('.profesor > a:nth-child(1)')
      .waitForElementVisible('.jsx-1753177132.boton.btn.btn-primary', 4000)
      .assert.containsText('.jsx-1753177132.boton.btn.btn-primary','Califica a este profesor')
  },
  'Visits professor page': function(browser) {
    browser
    .url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
    .click('.labelHover.jsx-3367902293 > input[type="checkbox"]:nth-child(1)')
  }
};
