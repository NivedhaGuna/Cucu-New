Feature: To validate the forgotten password functionality
  Scenario: Validate the forgotten password with invalid mobile number
    Given User should launch the browser and load the url
    When User should click the forgotten password link
    And User should enter the invalid mobile number in the textbox
    And User should click the search button
    Then User should navigate to temp blocked page