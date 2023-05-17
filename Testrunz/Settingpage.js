const { Builder, Key, By, until } = require("selenium-webdriver");
async function Settingpage() {
    const driver = await new Builder().forBrowser("chrome").build();


    //adduserin adminrole.
    try {
        await driver.manage().window().maximize();
        await driver.get("http://testrunz.com/#/");
        console.log("Navigated to http://testrunz.com/#/");

        const signInButton = await driver.findElement(By.xpath("/html/body/div/div/div/div/header/header/nav/div[1]/div/ul/li[2]/a"));
        await driver.executeScript("arguments[0].click()",signInButton)
        console.log(" Sign In Successfully");
        const emailField = await driver.findElement(By.xpath("//*[@id='email']"));
        await emailField.sendKeys("abinaya.learny@gmail.com");
        console.log("Entered email address");
        const passwordField = await driver.findElement(By.xpath("//*[@id='password']"));
        await passwordField.sendKeys("abinaya110");
        console.log("Entered password");
        const submitButton = await driver.findElement(By.xpath("//*[@id='submit']"));
        await driver.executeScript("arguments[0].click()",submitButton)
        console.log("Clicked on Submit button");
        const myElement = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div/div[1]/div/ul/div[2]/div[2]/span")), 10075);
        await driver.wait(until.elementIsVisible(myElement), 10075);
        await driver.executeScript("arguments[0].click()",myElement)
    
        console.log("Clicked on Runz option");
    
        

        const add = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[4]/div/div/span/button/span[1]/span")), 3000);
await driver.executeScript("arguments[0].click()", add);

const emailIDs = [ "shahana89@gmail.com"];

for (const email of emailIDs) {
  const username = await driver.wait(until.elementLocated(By.xpath("//*[@id='outlined-size-small']")), 3000);
  await username.sendKeys("stevejobs");

  const emailInput = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[2]/div/div/input")), 3000);
  await emailInput.sendKeys(email);


// Click the role button
const roleButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[6]/div/div/div")), 3000);
await driver.wait(until.elementIsVisible(roleButton), 3000);
await driver.wait(until.elementIsEnabled(roleButton), 3000);
await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth' })", roleButton);
await driver.executeScript("arguments[0].click()", roleButton);
console.log("Clicked the role button");

try {
    const studentRole = await driver.wait(until.elementLocated(By.xpath("//*[@data-value='student']")), 30000);
    await driver.wait(until.elementIsVisible(studentRole), 30000);
    await driver.wait(until.elementIsEnabled(studentRole), 30000);
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth' })", studentRole);
    await driver.executeScript("arguments[0].click()", studentRole);
    console.log("Clicked the student role");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
  
// Click the labs button and select an option
const labs = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[7]/div/div/div/input")), 3000);
await driver.wait(until.elementIsVisible(labs), 3000);
await driver.wait(until.elementIsEnabled(labs), 3000);
await driver.executeScript("arguments[0].click()", labs);
console.log("Clicked the labs button");

const labsOption = await driver.wait(until.elementLocated(By.xpath("/html/body/div[8]/div/ul/li[1]")), 3000);
await driver.wait(until.elementIsVisible(labsOption), 3000);
await driver.wait(until.elementIsEnabled(labsOption), 3000);
await driver.executeScript("arguments[0].click()", labsOption);
console.log("Selected labs option");


  const button1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div[2]/button")), 3000);
  await driver.wait(until.elementIsVisible(button1), 3000);
  await driver.wait(until.elementIsEnabled(button1),3000);
  await button1.click();
  console.log(" button1");

  const cancelButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div[1]/div[2]/button/span[1]")), 3000);
  await cancelButton.click();
  console.log(" cancelButton");

    const okbutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[6]/div/div[6]/button[1]")), 3000);
    await driver.wait(until.elementIsVisible(okbutton), 3000);
    await driver.wait(until.elementIsEnabled(okbutton),3000);
    await driver.executeScript("arguments[0].click()",okbutton)
    console.log(" okbutton");

  // Wait for the add button to reappear before adding the next email
  await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div/p/div/div/div/div[1]/div[4]/div/div/span/button")), 3000);
}

const emails = ["abinayaaa148@gmail.com"];

for (let email of emails) {
  const add = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div/p/div/div/div/div[1]/div[4]/div/div/span/button/span[1]/span")), 3000);
  await driver.executeScript("arguments[0].click()", add);

  const username = await driver.wait(until.elementLocated(By.xpath("//*[@id='outlined-size-small']")), 3000);
  await username.sendKeys("subashini");

  const emailInput = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[2]/div/div/input")), 3000);
  await emailInput.sendKeys(email);

  
  

  
  const studentrole = await driver.wait(until.elementLocated(By.xpath("/html/body/div[8]/div[3]/ul/li[2]")), 3000);
  await driver.wait(until.elementIsVisible(studentrole), 3000);
  await driver.wait(until.elementIsEnabled(studentrole),3000);       
  await studentrole.click();

  const labs = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[7]/div/div/div/input")), 3000);
  await driver.wait(until.elementIsVisible(labs), 3000);
  await driver.wait(until.elementIsEnabled(labs),3000);
  await labs.click();    
  console.log("labs");

  const labsoption = await driver.wait(until.elementLocated(By.xpath("/html/body/div[8]/div/ul/li[2]")), 3000);
  await driver.wait(until.elementIsVisible(labsoption), 3000);
  await driver.wait(until.elementIsEnabled(labsoption),3000);
  await labsoption.click();      
  console.log(" labsoption");

  const button1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div[2]/button")), 3000);
  await driver.wait(until.elementIsVisible(button1), 3000);
  await driver.wait(until.elementIsEnabled(button1),3000);
 await driver.executeScript("arguments[0].click()",button1);
 console.log(" button");

const cancelButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div[1]/div[2]/button/span[1]")), 3000);
 await cancelButton.click();
 console.log(" cancelButton");

     const okbutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[6]/div/div[6]/button[1]")), 3000);
    await driver.wait(until.elementIsVisible(okbutton), 3000);
    await driver.wait(until.elementIsEnabled(okbutton),3000);
    await driver.executeScript("arguments[0].click()",okbutton)
    console.log(" okbutton");

}
const search = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div/p/div/div/div/div[1]/div[3]/div/input")),3000);
        await search.sendKeys("subashini");
        const manageuser = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div/p/div/div/div/div[3]/div/div/div/table/tbody/tr[1]/td[2]")), 30000);
        await driver.wait(until.elementIsVisible(manageuser), 3000);
        await driver.executeScript("arguments[0].click()", manageuser);
        console.log("manage user has been opened ");


        const accessButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div[12]/div[3]/button/span[1]")), 30000);
        await accessButton.click();
        console.log("Access button clicked");

        const optionInput = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div[12]/div[2]/div/div[1]/div/div/div/input")), 30000);
        await optionInput.click();
        console.log("Option input filled");

        const distributingCheckbox = await driver.wait(until.elementLocated(By.xpath("/html/body/div[8]/div/ul/li[1]")), 30000);
        await driver.executeScript("arguments[0].click()", distributingCheckbox);
        console.log("Distributing checkbox clicked");

        const updatebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div[12]/div[2]/div/div[2]/button/span[1]")), 30000);
        await driver.executeScript("arguments[0].click()", updatebutton);
        console.log("updatebutton");
        try {
            await driver.wait(until.alertIsPresent(), 5000);
            let alert = await driver.switchTo().alert();
            await alert.accept(); // Click on OK button
            console.log("Alert popup message clicked.");
        } catch (error) {
            console.error("Error occurred while trying to handle alert popup message:", error);
        };

        const close1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div[1]/div[2]/button/span[1]")), 3000);
        await driver.executeScript("arguments[0].click()", close1);
        console.log("manageuser has been closed");


        const manageuser1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div/p/div/div/div/div[3]/div/div/div/table/tbody/tr[1]/td[2]")), 30000);
        await driver.wait(until.elementIsVisible(manageuser1), 3000);
        await driver.executeScript("arguments[0].click()", manageuser1);
        console.log("manage user has been opened ");


        const accessButton1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div[12]/div[3]/button/span[1]")), 30000);
        await accessButton1.click();
        console.log("Access button clicked");

        const optionInput1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div[12]/div[2]/div/div[1]/div/div/div/input")), 30000);
        await optionInput1.click();
        console.log("Option input filled");

        const distributingCheckbox1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[8]/div/ul/li[2]")), 30000);
        await driver.executeScript("arguments[0].click()", distributingCheckbox1);
        console.log("Distributing checkbox clicked");

        const updatebutton1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div[12]/div[2]/div/div[2]/button/span[1]")), 30000);
        await driver.executeScript("arguments[0].click()", updatebutton1);
        console.log("updatebutton");
        try {
            await driver.wait(until.alertIsPresent(), 5000);
            let alert = await driver.switchTo().alert();
            await alert.accept(); 
            console.log("Alert popup message clicked.");
        } catch (error) {
            console.error("Error occurred while trying to handle alert popup message:", error);
        };

        const close = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/div[1]/div[2]/button/span[1]")), 3000);
        await driver.executeScript("arguments[0].click()", close);
        console.log("manageuser has been closed"); 




        


    }catch (error) {
        console.log(error);

    }
}
Settingpage();