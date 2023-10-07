package org.runall;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utilities.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = "org.steps", dryRun = false, monochrome = true, snippets=SnippetType.CAMELCASE,
plugin = {"html:target\\Reports",
		  "junit:target\\Reports\\facebook.xml",
		  "json:target\\Reports\\face.json",
		  "rerun:src\\test\\resources\\Rerun\\failed.txt"})

public class RunAllClass extends JVMReport  {
	
	@AfterClass
	public static void callReport() {
		
		generateJvmReport(System.getProperty("user.dir")+"target\\Reports\\face.json");

	}
 	
}
