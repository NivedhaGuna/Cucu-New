$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/ForgottenPasswrd.feature");
formatter.feature({
  "name": "To validate the forgotten password functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the forgotten password with invalid mobile number",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_should_launch_the_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the forgotten password link",
  "keyword": "When "
});
formatter.match({
  "location": "ForgottenPassword.user_should_click_the_forgotten_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter the invalid mobile number in the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPassword.user_should_enter_the_invalid_mobile_number_in_the_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPassword.user_should_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to temp blocked page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgottenPassword.user_should_navigate_to_temp_blocked_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Feature/Login.feature");
formatter.feature({
  "name": "To validate login functionality in Fb",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate the login functionality of facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should maximize screen",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter invalid username \"\u003cUserName\u003e\" and invalid password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "Anil",
        "Anil@123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_should_launch_the_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality of facebook with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should maximize screen",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_should_maximize_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter invalid username \"Anil\" and invalid password \"Anil@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userShouldEnterInvalidUsernameAndInvalidPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Verify credential\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.steps.LoginSteps.user_should_navigate_to_incorrect_credential_page(LoginSteps.java:53)\r\n\tat ✽.User should navigate to incorrect credential page(file:src/test/resources/Feature/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should launch the browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_should_launch_the_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality of facebook with valid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should enter valid username and invalid password",
  "rows": [
    {
      "cells": [
        "Fruits",
        "Veg",
        "Fastfood",
        "Starters"
      ]
    },
    {
      "cells": [
        "Orange",
        "Carrot",
        "Maggi",
        "Soup"
      ]
    },
    {
      "cells": [
        "Apple",
        "LFinger",
        "Samosa",
        "Maggi"
      ]
    },
    {
      "cells": [
        "PineA",
        "Ash",
        "Bajji",
        "Masala"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userShouldEnterValidUsernameAndInvalidPassword(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});