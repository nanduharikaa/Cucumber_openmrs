package runnerClass;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\user\\eclipse-workspace_Cucumber\\openmrs\\framework\\features\\Openmrs.feature",
				 glue={"stepDefinition"},
				 plugin= {"html:target/cucumber.html","json:target/cucumber.json"},
				 monochrome= true
				)
public class TestRunner {

}
