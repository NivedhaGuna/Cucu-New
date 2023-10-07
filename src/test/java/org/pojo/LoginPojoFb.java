package org.pojo;

import org.helper.LibGlobalHelper;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPojoFb extends LibGlobalHelper {

	//1.Non parameterized constructor
	public LoginPojoFb() {
		PageFactory.initElements(driver, this);
	}
	
	//2.Private WebElements
	@FindBy(id="email")
	private WebElement username;
	
	@FindBy(id="pass")
	private WebElement passwrd;
	
	@FindBy(name="login")
	private WebElement loginBtn;
	
	//3.Getters
	
	public WebElement getUsername() {
		return username;
	}

	public WebElement getPasswrd() {
		return passwrd;
	}

	public WebElement getLoginBtn() {
		return loginBtn;
	}
	
	
	
	
	
	
	
}
