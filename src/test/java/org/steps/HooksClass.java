package org.steps;

import java.io.IOException;

import org.helper.LibGlobalHelper;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends LibGlobalHelper {

	@Before(order=1)
	public void beforeScenario() {
		openFirefox();
		launchUrl("https://www.facebook.com/");
	}
	
	@Before(order = 2)
	public void beforesec() {
		maxWindow();
	}
	

	@Before(order = 3)
	public void beforeS() {
		System.out.println("Last before Executed");
	}
	
	@After(order=3)
	public void afterSce() {
		System.out.println("Third after");
	}
	
	@After(order=2)
	public void afterS() {
		System.out.println("sec after");
	}
	@After(order=1)
	public void afterScenario(Scenario s) throws IOException {
	
		if (s.isFailed()) {
			TakesScreenshot tk = (TakesScreenshot)driver;
			byte[] screenshot = tk.getScreenshotAs(OutputType.BYTES);
			s.embed(screenshot, "image/png");
		}
			
		
	}
}
