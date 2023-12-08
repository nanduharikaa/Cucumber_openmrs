package objectRepo;

import org.openqa.selenium.By;

public class Objectrepo {
	public static final By UserName = By.xpath("//input[@id='username']");
	public static final By  passWord=By.xpath("//input[@id='password']");
	public static final By registrationButton=By.xpath("//ul[@id='sessionLocation']/li");
	public static final By loginButton=By.xpath("//input[@id=\"loginButton\"]");
	public static final By registerPatient=By.xpath("//a[@id=\"referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension\"]");
	public static final By givenName=By.xpath("//input[@name=\"givenName\"]");
	public static final By familyName=By.xpath("//input[@name=\"familyName\"]");
	//public static final By undefinedCheckbox=By.xpath("//button[@id=\"next-button\"]");
	public static final By nextButton=By.xpath("//button[@id=\"next-button\"]");
	public static final By genderField=By.xpath("//select[@name=\"gender\"]");
	public static final By nextButton1=By.xpath("//button[@id=\"next-button\"]");
	public static final By day=By.xpath("//input[@id=\"birthdateDay-field\"]");
	public static final By month=By.xpath("//select[@id=\"birthdateMonth-field\"]");
	public static final By year=By.xpath("//input[@id=\"birthdateYear-field\"]");
	public static final By nextButton2=By.xpath("//button[@id=\"next-button\"]");
	public static final By postalCode=By.xpath("//input[@id=\"postalCode\"]");	
	public static final By nextButton3=By.xpath("//button[@class=\"confirm right\"]");
	public static final By phoneNumber=By.xpath("//input[@name=\"phoneNumber\"]");
	public static final By nextButton4=By.xpath("//button[@id=\"next-button\"]");
	public static final By patientRelate=By.xpath("//select[@id=\"relationship_type\"]");
	public static final By nextButton5=By.xpath("//button[@id='next-button']");
	public static final By confirmButton=By.xpath("//input[@id=\"submit\"]");
	public static final By nextButton6=By.xpath("//button[@class=\"confirm right\"]");
	public static final By HomeButton=By.xpath("//a[@href=\"/openmrs/referenceapplication/home.page\"]");
	public static final By patientRecord=By.xpath("//*[@id=\"coreapps-activeVisitsHomepageLink-coreapps-activeVisitsHomepageLink-extension\"]");
	public static final By patientSearch=By.xpath("//input[@class=\"form-control\"]");
	public static final By patientDetails=By.xpath("//h1[@class=\"mt-0 mb-2 name\"]");
	public static final By sheduleAppointment=By.xpath("//*[@id=\"appointmentschedulingui.schedulingAppointmentDashboardLink\"]/div/div[2]");
	
	
}