Feature: HelloWorld

  Hello world app

  Scenario: Go to app
    Given i go to hello world app
    Then should see 'Hello World!'
    #node_modules\.bin\cucumber-js