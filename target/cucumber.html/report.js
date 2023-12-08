$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:framework/features/Openmrs.feature");
formatter.feature({
  "name": "Login and book a appointment functionality.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check the login functionlity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.Openmrs.open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the url",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username \"Admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  \"Admin123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on reistration desk button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_reistration_desk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigated to home page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.Openmrs.navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check the Register a patiant functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on register a patiant",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_register_a_patiant()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter given name \"jin\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_given_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter family name \"kim\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_family_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on next1.",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_next1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the female.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.select_the_female()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@name\u003d\"gender\"]\"}\n  (Session info: chrome\u003d119.0.6045.200)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [98847a01fc7acf89efeee7887fa0ca4c, findElement {using\u003dxpath, value\u003d//select[@name\u003d\"gender\"]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 119.0.6045.200, chrome: {chromedriverVersion: 119.0.6045.105 (38c72552c5e..., userDataDir: C:\\Users\\user\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57551}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57551/devtoo..., se:cdpVersion: 119.0.6045.200, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 98847a01fc7acf89efeee7887fa0ca4c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat stepDefinition.Openmrs.select_the_female(Openmrs.java:79)\r\n\tat ✽.Select the female.(file:///C:/Users/user/eclipse-workspace_Cucumber/openmrs/framework/features/Openmrs.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on next button2.",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter day \"20\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_day(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select the drop down",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.Openmrs.select_the_drop_down()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter year 2023",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_year(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on next3.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_next3()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter postal code \"2868\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_postal_code(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click next6",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_next6()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter patiant phone number \"4435235222\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_patiant_phone_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on next4",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select the patiant related drop down.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.select_the_patiant_related_drop_down()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on next5",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_next11()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on confirm",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_confirm()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Check the patiant record functionality.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on home",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on patiant record",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_patiant_record()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on serach button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.click_on_serach_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter patiant name \"jin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.Openmrs.enter_patiant_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "View tha patiant",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.Openmrs.view_tha_patiant()"
});
formatter.result({
  "status": "passed"
});
});