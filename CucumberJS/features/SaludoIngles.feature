Feature: Saludo en ingles

  Hello world app

  Scenario: Saludo amistoso en English
    Given I open the webapp Saludador at '00:00', select language 'EN' and click button Saludar
    Then should see greeting 'Good morning!'
    #node_modules\.bin\cucumber-js