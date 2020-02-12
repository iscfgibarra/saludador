Feature: SaludosEs

  Saludo Espaniol

  Scenario: Go to app
    Given i go to Saludo ES
    When language is set to ES and time is between 00:00 and 11:59
    Then should see '¡Buenos dias!'
    #node_modules\.bin\cucumber-js

  Scenario: Go to app
    Given i go to Saludo ES
    When language is set to ES and time is between 12:00 and 17:59
    Then should see '¡Buenas tardes!'
    #node_modules\.bin\cucumber-js 

  Scenario: Go to app
    Given i go to Saludo ES
    When language is set to ES and time is between 18:00 and 23:59
    Then should see '¡Buenas noches!'
    #node_modules\.bin\cucumber-js 