const { Builder, By, until } = require("selenium-webdriver");

async function scrollToElement(driver, element) {
  await driver.executeScript("arguments[0].scrollIntoView();", element);
}

async function test() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.manage().window().maximize();
    await driver.get("http://testrunz.com/#/");
    console.log("Navigated to http://testrunz.com/#/");
    const signInButton = await driver.findElement(By.xpath("//*[@id='root']/div/div/div/header/div/div[1]/div/p[1]"));
    await signInButton.click();

    console.log("Clicked on Sign In button");
    const emailField = await driver.findElement(By.xpath("//*[@id='email']"));
    await emailField.sendKeys("abinaya.learny@gmail.com");
    console.log("Entered email address");
    const passwordField = await driver.findElement(By.xpath("//*[@id='password']"));
    await passwordField.sendKeys("abinaya110");
    console.log("Entered password");
    const submitButton = await driver.findElement(By.xpath("//*[@id='submit']"));
    await submitButton.click();
    console.log("Clicked on Submit button");

    const myElement = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[3]/div/div/div/table/tbody/tr[1]/td[2]")), 10075);
    await driver.wait(until.elementIsVisible(myElement), 10075);
    await myElement.click();
    console.log("Clicked on input element");

    const Experiment = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div/div[2]/button[2]")), 10075);
    await driver.wait(until.elementIsVisible(Experiment), 10075);
    await scrollToElement(driver, Experiment);
    await Experiment.click();
    console.log("Clicked on Experiment button");
    

    async function scrollToElement(driver, Experiment) {
      await driver.executeScript("arguments[0].click();", Experiment);
      await driver.executeScript("window.scrollBy(0, -150);"); // scroll up by 150 pixels to adjust for the header
    }

    


  } catch (error) {
    console.log(error);
  }
  //   finally {
  //     await driver.quit();
  //   }
}

test();
