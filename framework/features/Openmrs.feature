Feature: Login and book a appointment functionality.

  Scenario: Check the login functionlity
    Given Open the browser
    When Enter the url
    Then Enter username "Admin"
    Then Enter password  "Admin123"
    Then click on reistration desk button
    Then Click on login button
    And Navigated to home page

  Scenario: Check the Register a patiant functionality
    Given Click on register a patiant
    When Enter given name "jin"
    Then enter family name "kim"
    And click on next1.
    Then Select the female.
    And Click on next button2.
    Then enter day "20"
    And select the drop down
    And enter year 2023
    Then click on next3.
    Then enter postal code "2868"
    Then click next6
    Then enter patiant phone number "4435235222"
    And click on next4
    Then select the patiant related drop down.
    And click on next5
    Then click on confirm

  Scenario: Check the patiant record functionality.
    Given click on home
    When Click on patiant record
    Then Click on serach button
    And enter patiant name "jin"
    Then View tha patiant

 
