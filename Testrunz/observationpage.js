const { Builder, Key, By, until } = require("selenium-webdriver");


async function Experiment() {
    const driver = await new Builder().forBrowser("chrome").build();
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
        const myElement = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[1]/div/ul/div[2]/div[2]/span")), 10075);
        await driver.wait(until.elementIsVisible(myElement), 10075);
        await driver.executeScript("arguments[0].click()",myElement)
    
        console.log("Clicked on Runz option");
    
        


        const createRunz = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[3]/div/div/div/table/tbody/tr[1]/td[1]")), 30000)
        await driver.wait(until.elementIsVisible(createRunz), 30000);
        await driver.executeScript("arguments[0].click()",createRunz)
        console.log("Runz opened");
        const data1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[3]/td[2]/input")), 20000)
        await driver.wait(until.elementIsVisible(data1), 20000);
        await data1.sendKeys(1.5);
        const data2 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[3]/td[3]/input")), 20000)
        await driver.wait(until.elementIsVisible(data2), 20000);
        await data2.sendKeys(0.5);
        const data3 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[3]/td[4]/input")), 20000)
        await driver.wait(until.elementIsVisible(data3), 20000);
        await data3.sendKeys(2);
        // const data4 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_8Oj-DX7']")), 20000)
        // await driver.wait(until.elementIsVisible(data4), 20000);
        // await data4.sendKeys(2.0);
        // const data5 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_7SNxTAf']")), 20000)
        // await driver.wait(until.elementIsVisible(data5), 20000);
        // await data5.sendKeys(0.5);
        // const data6 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_kz-NFEn']")), 20000)
        // await driver.wait(until.elementIsVisible(data6), 20000);
        // await data6.sendKeys(2.5);
        // const data7 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_w40hE13']")), 20000)
        // await driver.wait(until.elementIsVisible(data7), 20000);
        // await data7.sendKeys(3.5);
        // const data8 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_ekALsHZ']")), 20000)
        // await driver.wait(until.elementIsVisible(data8), 20000);
        // await data8.sendKeys(0.6);
        // const data9 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_9I5RgoV']")), 20000)
        // await driver.wait(until.elementIsVisible(data9), 20000);
        // await data9.sendKeys(4.1);
        // const data10 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_98jENiB']")), 20000)
        // await driver.wait(until.elementIsVisible(data10), 20000);
        // await data10.sendKeys(4.2);
        // const data11 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_xJIcxn3']")), 20000)
        // await driver.wait(until.elementIsVisible(data11), 20000);
        // await data11.sendKeys(0.8);
        // const data12 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_e-bMkLV']")), 20000)
        // await driver.wait(until.elementIsVisible(data12), 20000);
        // await data12.sendKeys(5.0);

        // const data = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_CFgxDo6']")), 20000)
        // await driver.wait(until.elementIsVisible(data), 20000);
        // await data.sendKeys(5.2);

        // const data13 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_B1fAFJ9']")), 20000)
        // await driver.wait(until.elementIsVisible(data13), 20000);
        // await data13.sendKeys(5.4);
        // const data14 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_ZhUiHRj']")), 20000)
        // await driver.wait(until.elementIsVisible(data14), 20000);
        // await data14.sendKeys(1.0);


        // console.log("data has been stored");
        // await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');

        const savebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[2]/button[2]")), 20000);
        await driver.wait(until.elementIsVisible(savebutton), 20000);
        await driver.executeScript("arguments[0].click()", savebutton);
        console.log("Clicked on Runz option");
        const Graphbutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[2]/button[1]")), 20000);
        await driver.wait(until.elementIsVisible(Graphbutton), 20000);
        await driver.executeScript("arguments[0].click()", Graphbutton);
        console.log("Clicked on graph option");
        const graphOption = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/div/div/div")), 20000);
        await driver.wait(until.elementIsVisible(graphOption), 20000);
        await driver.wait(until.elementIsEnabled(graphOption), 20000);
        await driver.executeScript("arguments[0].click()", graphoption1);
        
        const graphoption1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='menu-']/div[3]/ul/li[1]")), 30000);
        await driver.wait(until.elementIsVisible(graphoption1), 30000);
        await driver.executeScript("arguments[0].click()", graphoption1);

        const graphoption2 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/select")), 30000);
        await driver.wait(until.elementIsVisible(graphoption2), 30000);
        await driver.executeScript("arguments[0].click()", graphoption2);

        
        const graphoption8 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/select/option[2]")), 30000);
        await driver.wait(until.elementIsVisible(graphoption8), 30000);
        await driver.executeScript("arguments[0].click()", graphoption8);

        const element = driver.findElement(By.xpath("//input[@value='x1']"));
        await element.clear();
        //  console.log("removed x1");

        const x1value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span[1]/div/div/div[1]/table/thead/tr/th[1]/input")), 20000);
        await driver.wait(until.elementIsVisible(x1value), 20000);
        await x1value.sendKeys("Load current");
        console.log("Graph Title enterted");

        const element1 = driver.findElement(By.xpath("//input[@value='y1']"));
        await element1.clear();
        //  console.log("removed y1");

        const y1value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span[1]/div/div/div[1]/table/thead/tr/th[2]/input")), 20000);
        await driver.wait(until.elementIsVisible(y1value), 20000);
        await y1value.sendKeys("Transformer-A");
        console.log("Graph Title enterted");
        const element2 = driver.findElement(By.xpath("//input[@value='y2']"));
        await element2.clear();
        // console.log("removed y2");
        const y2value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/thead/tr/th[3]/input")), 20000);
        await driver.wait(until.elementIsVisible(y2value), 20000);
        await y2value.sendKeys("Transformer-B");
        console.log("Graph Title enterted");
        const cell1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr/td[1]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell1), 20000);
        await cell1.sendKeys(1.5);
        const cell2 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr/td[2]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell2), 20000);
        await cell2.sendKeys(0.5);
        const cell3 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr/td[3]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell3), 20000);
        await cell3.sendKeys(2);
        const cell4 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[2]/td[1]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell4), 20000);
        await cell4.sendKeys(2.0);
        const cell5 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[2]/td[2]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell5), 20000);
        await cell5.sendKeys(0.5);
        const cell6 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[2]/td[3]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell6), 20000);
        await cell6.sendKeys(2.5);
        const cell7 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[3]/td[1]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell7), 20000);
        await cell7.sendKeys(3.5);
        const cell8 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[3]/td[2]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell8), 20000);
        await cell8.sendKeys(0.6);
        const cell9 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[3]/td[3]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell9), 20000);
        await cell9.sendKeys(4.1);
        const cell10 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[4]/td[1]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell10), 20000);
        await cell10.sendKeys(4.2);
        const cell11 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[4]/td[2]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell11), 20000);
        await cell11.sendKeys(0.8);
        const cell12 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[4]/td[3]/input")), 20000)
        await driver.wait(until.elementIsVisible(cell12), 20000);
        await cell12.sendKeys(5.1);
        console.log("graph data are plotted");



        const generatebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/span/div/button[1]")), 30000);
        await driver.executeScript("arguments[0].click()", generatebutton);
        await driver.wait(until.elementIsVisible(generatebutton), 30000);
        // await generatebutton.click();
        console.log("generatebutton worked");



        const updatebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/span/div/button[2]")), 30000);
        await driver.executeScript("arguments[0].click()", updatebutton);
        await driver.wait(until.elementIsVisible(updatebutton), 30000);
        console.log("Update button worked");


        const datasavedbutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div[6]/button[1]")), 30000);
        await driver.wait(until.elementIsVisible(datasavedbutton), 30000);
        await datasavedbutton.click();
        console.log("Savebutton worked");



        console.log("Runz Created Successfully")
    } catch (error) {
        console.log(error);
    }
}

Experiment();
