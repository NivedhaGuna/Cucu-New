package org.steps;

import java.time.Duration;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.pojo.LoginPojoFb;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends LoginPojoFb{

	WebDriver driver;
	
	@Given("User should launch the browser and load the url")
	public void user_should_launch_the_browser_and_load_the_url() {
	    
		openFirefox();
		launchUrl("https://www.facebook.com/");
	}

	@And("User should maximize screen")
	public void user_should_maximize_screen() {
	   maxWindow();
	}

	@When("User should enter invalid username and invalid password")
	public void user_should_enter_invalid_username_and_invalid_password() {
	    LoginPojoFb l = new LoginPojoFb();
	    WebElement username = l.getUsername();
	    fillTextbox(username, "Greens");
	    
	   WebElement passwrd = l.getPasswrd();
	   fillTextbox(passwrd, "greens@123");
	}

	@When("User should click the login button")
	public void user_should_click_the_login_button() {
		LoginPojoFb l = new LoginPojoFb();
		WebElement login = l.getLoginBtn();
		toClick(login);
		implicitWait(Duration.ofSeconds(4));
	}
	

	@Then("User should navigate to incorrect credential page")
	public void user_should_navigate_to_incorrect_credential_page() {
	    
		 String url = fetchUrl();
		Assert.assertTrue("Verify credential", url.contains("recover"));
		System.out.println("Test case passed");
	}
	
	
	@When("User should enter invalid username {string} and invalid password {string}")
	public void userShouldEnterInvalidUsernameAndInvalidPassword(String s1, String s2) {
	    
		 LoginPojoFb l = new LoginPojoFb();
		  WebElement username = l.getUsername();
	     fillTextbox(username,s1);
		    
		   WebElement passwrd = l.getPasswrd();
		   fillTextbox(passwrd, s2);
		
	}
	
	@When("User should enter valid username and invalid password")
	public void userShouldEnterValidUsernameAndInvalidPassword(io.cucumber.datatable.DataTable d) {
		LoginPojoFb l = new LoginPojoFb();
		  WebElement username = l.getUsername();
		  String s1 = d.asList().get(3);
	     fillTextbox(username,s1);
		    
		   WebElement passwrd = l.getPasswrd();
		   fillTextbox(passwrd, d.asList().get(2));
		
	}

}
