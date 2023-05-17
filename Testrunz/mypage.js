const { until, By, Builder } = require("selenium-webdriver");
const { elementLocated } = require("selenium-webdriver/lib/until");

async function Runz() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.manage().window().maximize();
    await driver.get("http://testrunz.com/#/");
    console.log("Navigated to http://testrunz.com/#/");
    const signInButton = await driver.findElement(By.xpath("//*[@id='root']/div/div/div/header/div/div[1]/div/p[1]"));
    await signInButton.click();

    console.log(" Sign In Successfully");
    const emailField = await driver.findElement(By.xpath("//*[@id='email']"));
    await emailField.sendKeys("abinaya.learny@gmail.com");
    console.log("Entered email address");
    const passwordField = await driver.findElement(By.xpath("//*[@id='password']"));
    await passwordField.sendKeys("abinaya110");
    console.log("Entered password");
    const submitButton = await driver.findElement(By.xpath("//*[@id='submit']"));
    await submitButton.click();
    console.log("Clicked on Submit button");
    const myElement = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[1]/div/ul/div[2]/div[2]/span")), 10075);
    await driver.wait(until.elementIsVisible(myElement), 10075);
    await myElement.click();
    console.log("Clicked on Runz option");

    const plus = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[4]/div/div/span/button/span[1]/span")), 20000);
    await driver.wait(until.elementIsVisible(plus), 20000);
    await plus.click();
    console.log("Adding Runz");
    plusClicked = true;


    async function waitForElement(driver, by) {
      const element = await driver.wait(until.elementLocated(by), 10000);
      await driver.wait(until.elementIsVisible(element), 10000);
      await driver.wait(until.elementIsEnabled(element), 10000);
      return element;
    }

    const descriptionField = await waitForElement(driver, By.xpath(`/html/body/div[3]/div/div/div/div/form/div[1]/div/input`));
    await descriptionField.sendKeys(description);
    console.log(`Entered description: ${description}`);


    const labTypeDropdown = await waitForElement(driver, By.xpath(`//*[@id='controllable-states-demo']`));
    await labTypeDropdown.click();
    console.log(`Clicked on Lab Type dropdown`);

    const option = await waitForElement(driver, By.xpath(`//*[@id="controllable-states-demo-option-0"]`));
    await option.click();
    console.log(`Selected option in Lab Type dropdown: ${labType}`);


    const procedureNameField = await waitForElement(driver, By.xpath(`/html/body/div[3]/div/div/div/div/form/div[3]/div/div/input`));
    await procedureNameField.click();
    console.log(`Clicked on procedure name field`);

    const option1 = await waitForElement(driver, By.xpath(`//*[@id='controllable-states-demo-option-0']`));
    await option1.click();

    const clickSaveButton = await waitForElement(driver, By.xpath("/html/body/div[3]/div/div/div/div/form/button[1]/span[1]"));
    await clickSaveButton.click();
    console.log(`Selected save button: ${savebutton}`);
    console.log()


  } catch (error) {
    console.log(error)
  }
}
  Runz();



  

  

