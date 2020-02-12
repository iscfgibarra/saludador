Feature: Saludo en ingles

  Scenario Outline: Saludo amistoso
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
      |00:00  |ES   |¡Buenos dias!|
      |11:59  |ES   |¡Buenos dias!|
      |12:00  |ES   |¡Buenas tardes!|
      |17:59  |ES   |¡Buenas tardes!|
      |18:59  |ES   |¡Buenas noches!|
      |23:59  |ES   |¡Buenas noches!|
      |00:00  |FR   |Bonjour!|
      |11:59  |FR   |Bonjour!|
      |12:00  |FR   |Bonsoir!|
      |17:59  |FR   |Bonsoir!|
      |18:59  |FR   |Bonne nuit!|
      |23:59  |FR   |Bonne nuit!|
    #node_modules\.bin\cucumber-js
    