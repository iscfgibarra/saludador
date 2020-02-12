Feature: Saludo en ingles

  Scenario Outline: Saludo amistoso en English
    Given I open the webapp Saludador at '<hour>', select language '<lang>' and click button Saludar
    Then should see greeting '<result>'
    Examples:
      |hour   |lang |result|
      |00:00  |EN   |Good morning!|
      |11:59  |EN   |Good morning!|
      |12:00  |EN   |Good afternoon!|
      |17:59  |EN   |Good afternoon!|
      |18:59  |EN   |Good night!|
      |23:59  |EN   |Good night!|
    #node_modules\.bin\cucumber-js