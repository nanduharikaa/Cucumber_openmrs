package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.en.*;
import objectRepo.Objectrepo;
import testBase.PageBase;
import testBase.TestBase;
import utilities.Utils;

public class Openmrs {
	
		@Given("Open the browser")
		public void open_the_browser() throws Throwable {
			PageBase.openBrowser("Browser");
		}

		@When("Enter the url")
		public void enter_the_url() throws Throwable { 
			String url=Utils.getFileProperty("URL");
			PageBase.driver.get(url);
			Thread.sleep(3000); 
		
		}
		@Then("Enter username {string}")
	public void enter_username(String Username)  {
			TestBase.TypeInTextBox(Objectrepo.UserName, Username, "Username");
			//TestBase.driver.findElement(By.xpath("//input[@id='username']")).sendKeys("Admin");
	}

		@Then("Enter password  {string}")
		public void enter_password(String string) throws Throwable  {
		    TestBase.typeInTextBox(Objectrepo.passWord, string, "Passwordfield");
		    Thread.sleep(2000);
		}
		@Then("click on reistration desk button")
		public void click_on_reistration_desk_button() throws Throwable {
			TestBase.clickonElement(Objectrepo.registrationButton, "regDesk");
			Thread.sleep(2000);
		}

		@Then("Click on login button")
		public void click_on_login_button() throws Throwable {
		   TestBase.clickonElement(Objectrepo.loginButton, "login button");
		}

		@Then("Navigated to home page")
		public void navigated_to_home_page() {
		  System.out.println("homepage");
		}

		@Given("Click on register a patiant")
		public void click_on_register_a_patiant() throws Throwable {
		    TestBase.clickonElement(Objectrepo.registerPatient, "register patient button");
		    Thread.sleep(2000);
		}

		@When("Enter given name {string}")
		public void enter_given_name(String GivenName) {
			TestBase.typeInTextBox(Objectrepo.givenName, GivenName, "Given name field");
			
		   }

		@Then("enter family name {string}")
		public void enter_family_name(String string) {
		    TestBase.typeInTextBox(Objectrepo.familyName, string, "family name field");
		
		}

		@Then("click on next1.")
		public void click_on_next1() throws Throwable {
		   TestBase.clickonElement(Objectrepo.nextButton, "nextbutton");
		}

		@Then("Select the female.")
		public void select_the_female() {
			WebElement ele= TestBase.driver.findElement(By.xpath("//select[@name=\"gender\"]"));
			Select s= new Select(ele);
			s.selectByValue("F");

		    
		}

		@Then("Click on next button2.")
		public void click_on_next_button() throws Throwable {
			TestBase.clickonElement(Objectrepo.nextButton1, "next button");
		    
		}

		@Then("enter day {string}")
		public void enter_day(String string) {
			TestBase.typeInTextBox(Objectrepo.day, string, string);
		}
		    

		@Then("select the drop down")
		public void select_the_drop_down() {
			WebElement w= TestBase.driver.findElement(By.xpath("//select[@name=\"birthdateMonth\"]"));
			Select s = new Select(w);
			s.selectByValue("2");
			
		}

		@Then("enter year {int}")
		public void enter_year(int int1) {
			TestBase.typeInTextBox1(Objectrepo.year, String.valueOf(int1), null);
			
		   
		}
		@Then("click on next3.")
		public void click_on_next3() throws Throwable {
		    TestBase.clickonElement(Objectrepo.nextButton3, "next button");
		}

		@Then("enter postal code {string}")
		public void enter_postal_code(String string) {
			TestBase.typeInTextBox(Objectrepo.postalCode, string, string);
		}
		@Then("click next6")
		public void click_next6() throws Throwable {
		    TestBase.clickonElement(Objectrepo.nextButton6, "next button");
			
		    
		}
		@Then("enter patiant phone number {string}")
		public void enter_patiant_phone_number(String string) {
		   TestBase.typeInTextBox(Objectrepo.phoneNumber, string, string);
		    
		}

		@Then("click on next4")
		public void click_on_next() throws Exception {
			TestBase.clickonElement(Objectrepo.nextButton4, "ELE");
		    
		}

		@Then("select the patiant related drop down.")
		public void select_the_patiant_related_drop_down() {
			WebElement elel = TestBase.driver.findElement(By.xpath("//select[@name=\"relationship_type\"]"));
			Select s = new Select (elel);
			s.selectByVisibleText("Patient");
			
		    
		}
		@Then("click on next5")
		public void click_on_next11() throws Exception {
			TestBase.clickonElement(Objectrepo.nextButton5, "ELE");
		}

		@Then("click on confirm")
		public void click_on_confirm() throws Throwable {
			Thread.sleep(2000);
			TestBase.clickonElement(Objectrepo.confirmButton, "click");
		    
		}

		@Given("click on home")
		public void click_on_home() throws Throwable {
			TestBase.clickonElement(Objectrepo.HomeButton, "Navigate to home button");
		    
		}

		@When("Click on patiant record")
		public void click_on_patiant_record() throws Throwable {
			TestBase.clickonElement(Objectrepo.patientRecord, "patient record button in home page");
		    
		}

		@Then("Click on serach button")
		public void click_on_serach_button() {
			System.out.println("record page");
		   
		}

		@Then("enter patiant name {string}")
		public void enter_patiant_name(String string) {
			TestBase.typeInTextBox(Objectrepo.patientSearch, string, string);
		    
		}

		@Then("View tha patiant")
		public void view_tha_patiant() {
			String s=TestBase.getText(Objectrepo.patientDetails, "Patiant name");
			System.out.println(s);
		   
		}

}
