Feature: To validate login functionality in Fb
Background:
Given User should launch the browser and load the url

  Scenario Outline: To validate the login functionality of facebook with invalid username and invalid password
    
    And User should maximize screen
    When User should enter invalid username "<UserName>" and invalid password "<Password>"
    And User should click the login button
    Then User should navigate to incorrect credential page
    
    Examples:
          |UserName|Password|
          |Anil    |Anil@123|
    
    
  Scenario: To validate the login functionality of facebook with valid username and invalid password

   When User should enter valid username and invalid password 
        #2D List
        |Fruits |Veg    |Fastfood|Starters|
        |Orange |Carrot |Maggi   |Soup    |
        |Apple  |LFinger|Samosa  |Maggi   |
        |PineA  |Ash    |Bajji   |Masala  |
        
   And User should click the login button
   Then User should navigate to incorrect credential page