const{Builder,By,Key,until}=require("selenium-webdriver");

async function AddMultipleRunz() {

const driver = await new Builder().forBrowser("chrome").build();
try {
    await driver.manage().window().maximize();
        await driver.get("http://testrunz.com/#/");
        console.log("Navigated to http://testrunz.com/#/");

        const signInButton = await driver.findElement(By.xpath("/html/body/div/div/div/div/header/header/nav/div[1]/div/ul/li[2]/a"));
        await driver.executeScript("arguments[0].click()", signInButton)
        console.log(" Sign In Successfully");
        const emailField = await driver.findElement(By.xpath("//*[@id='email']"));
        await emailField.sendKeys("abinaya.learny@gmail.com");
        console.log("Entered email address");
        const passwordField = await driver.findElement(By.xpath("//*[@id='password']"));
        await passwordField.sendKeys("abinaya110");
        console.log("Entered password");
        const submitButton = await driver.findElement(By.xpath("//*[@id='submit']"));
        await driver.executeScript("arguments[0].click()", submitButton)
        console.log("Clicked on Submit button");
        const myElement = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[1]/div/ul/div[2]/div[2]/span")), 10075);
        await driver.wait(until.elementIsVisible(myElement), 10075);
        await driver.executeScript("arguments[0].click()", myElement)
    

        const plus = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[4]/div/div/span/button/span[1]/span")), 20000);
        await driver.wait(until.elementIsVisible(plus), 20000);
        await plus.click();
        console.log("Adding Runz");
        plusClicked = true;

        const descriptionField = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/form/div[1]/div/input")), 30000);
        await driver.wait(until.elementIsVisible(descriptionField), 30000);
        await descriptionField.sendKeys(" Three phase Induction motor");
        const labTypeDropdown = await driver.wait(until.elementLocated(By.xpath("//*[@id='controllable-states-demo']")));
        await labTypeDropdown.click();
        console.log("Clicked the Labtypedropdown");

        const labType = await driver.wait(until.elementLocated(By.xpath("//*[@id='controllable-states-demo-option-0']")));
        await labType.click();
        console.log("Entered the Labtype");


        const procedureNameField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]/div/div/div/div/form/div[3]/div/div/input`)));
        await procedureNameField.click();
        console.log("Entered the procedureNameField");


        const option = await driver.wait(until.elementLocated(By.xpath("//*[@id='controllable-states-demo-option-0']")));
        await option.click();

        const clickSaveButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/form/button[1]/span[1]")));
        await clickSaveButton.click();
        console.log("Clicked the savebutton");

        const procedureName = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[3]/div/div/div/table/tbody/tr[1]/td[2]")), 50000);
        await driver.wait(until.elementIsVisible(procedureName), 50000);
        await driver.executeScript("arguments[0].click()", procedureName);
        console.log("Successfully opened ");

        const data1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_su78D2n']")), 20000)
        await driver.wait(until.elementIsVisible(data1), 20000);
        await data1.sendKeys(1.5);
        // /html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[3]/td[2]/input
        // /html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[3]/td[3]/input
        // /html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[4]/td[2]/input
        // /html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[8]/td[2]/input






















} catch (error) {
}
}
AddMultipleRunz();
