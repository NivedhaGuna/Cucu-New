package org.steps;

import org.helper.LibGlobalHelper;
import org.junit.Assert;
import org.openqa.selenium.By;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ForgottenPassword extends LibGlobalHelper{
	
	@When("User should click the forgotten password link")
	public void user_should_click_the_forgotten_password_link() throws InterruptedException {
		driver.findElement(By.xpath("//a[text()='Forgotten password?']")).click();
	    Thread.sleep(2000);
	}

	@When("User should enter the invalid mobile number in the textbox")
	public void user_should_enter_the_invalid_mobile_number_in_the_textbox()  {
		 driver.findElement(By.id("identify_email")).sendKeys("1234656780");
		 
	}

	@When("User should click the search button")
	public void user_should_click_the_search_button() {
		driver.findElement(By.id("did_submit")).click();
	}
	
	@Then("User should navigate to temp blocked page")
	public void user_should_navigate_to_temp_blocked_page() {
	  String title = driver.getTitle();
	  Assert.assertTrue("Check the forgot password", title.contains("Forgotten"));
	   
	}


	
}
