package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/yemioluv/eclipse-workspace/com.CupCake/src/test/java/features/SignUpNow.feature", 
		glue = { "steps" },
		format = {"pretty", "html:test-output", "json:json_output/cuccmber.json", "junit:junit_xml/cucumber.xml",
				 "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:path/report.html"},
		// tags= {"@random"},
		monochrome = true, 
		strict = true
//		dryRun = true

)

public class TestRunnerTest {

}
