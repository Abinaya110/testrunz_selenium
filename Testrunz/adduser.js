const { Builder, Key, By, until } = require("selenium-webdriver");
async function Settingpage() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.manage().window().maximize();
        await driver.get("http://testrunz.com/#/");
        console.log("Navigated to http://testrunz.com/#/");

        const signInButton = await driver.findElement(By.xpath("/html/body/div/div/div/div/header/div/div[1]/div/p[1]"));
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
        const myElement = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[1]/div/ul/div[4]/div[2]/span")), 30000);
        await driver.wait(until.elementIsVisible(myElement), 30000);
        await myElement.click();
        console.log("Clicked on Setting page");


        const Activitypage = await driver.wait(until.elementLocated(By.xpath("//*[@id='simple-tab-1']/span[1]")), 3000);
        await Activitypage.click();
        console.log("Opened Activity page");

        const university =await driver.wait(until.elementLocated(By.xpath("//*[@id='outlined-basic']")),3000);
        await university.click();
        console.log("university");

        const pu =await driver.wait(until.elementLocated(By.xpath("//*[@id='outlined-basic-option-0']")),6000);
        await driver.wait(until.elementIsVisible(pu), 6000);
        await driver.wait(until.elementIsEnabled(pu),6000);
        await pu.click();
        console.log("pondicherry university");

        const institutename =await driver.wait(until.elementLocated(By.xpath("//*[@id='outlined-basic']")),6000);
        await driver.wait(until.elementIsVisible(institutename), 6000);
        await driver.wait(until.elementIsEnabled(institutename),6000);

        await institutename.click();
        console.log("institute ");

        const Acet =await driver.wait(until.elementLocated(By.xpath("//*[@id='outlined-basic-option-1']")),6000);
        await driver.wait(until.elementIsVisible(Acet), 6000);
        await driver.wait(until.elementIsEnabled(Acet),6000);
        await Acet.click();
        console.log("institutename ");










    }catch (error) {
        console.log(error);

    }
}
Settingpage();