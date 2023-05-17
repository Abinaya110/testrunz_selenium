const { Builder, By, Key, until } = require("selenium-webdriver");

async function AddRunz() {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.manage().window().maximize();
        await driver.get("http://testrunz.com/#/");
        console.log("Navigate to http://testrunz.com/#/");

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

        const myElement = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[1]/div/ul/div[2]/div[2]/span")), 10075);
        await driver.wait(until.elementIsVisible(myElement), 10075);
        await myElement.click();
        console.log("Clicked on Runz option");

        const plus = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[4]/div/div/span/button/span[1]/span")), 20000);
        await driver.wait(until.elementIsVisible(plus), 20000);
        await plus.click();
        console.log("Adding Runz");
        plusClicked = true;

        const descriptionField = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/form/div[1]/div/input")), 30000);
        await driver.wait(until.elementIsVisible(descriptionField), 30000);
        await descriptionField.sendKeys(" Parallel Operation");
        const labTypeDropdown = await driver.wait(until.elementLocated(By.xpath("//*[@id='controllable-states-demo']")));
        await labTypeDropdown.click();
        console.log("Clicked the Labtypedropdown");

        const labType = await driver.wait(until.elementLocated(By.xpath("//*[@id='controllable-states-demo-option-2']")));
        await labType.click();
        console.log("Entered the Labtype");


        const procedureNameField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]/div/div/div/div/form/div[3]/div/div/input`)));
        await procedureNameField.click();
        console.log("Entered the procedureNameField");


        const option = await driver.wait(until.elementLocated(By.xpath("//*[@id='controllable-states-demo-option-6']")));
        await option.click();

        const clickSaveButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/form/button[1]/span[1]")));
        await clickSaveButton.click();
        console.log("Clicked the savebutton");

        const procedureName = await driver.wait(until.elementLocated(By.xpath("//td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft'][@value='Parallel Operation_acet']")), 50000);
        await driver.wait(until.elementIsVisible(procedureName), 50000);
        await driver.executeScript("arguments[0].click()", procedureName);
        console.log("Successfully opened ");

        const data1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_su78D2n']")), 20000)
        await driver.wait(until.elementIsVisible(data1), 20000);
        await data1.sendKeys(1.5);
        const data2 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_fTAjcPy']")), 20000)
        await driver.wait(until.elementIsVisible(data2), 20000);
        await data2.sendKeys(0.5);
        const data3 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_kEPMkm1']")), 20000)
        await driver.wait(until.elementIsVisible(data3), 20000);
        await data3.sendKeys(2);
        const data4 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_8Oj-DX7']")), 20000)
        await driver.wait(until.elementIsVisible(data4), 20000);
        await data4.sendKeys(2.0);
        const data5 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_7SNxTAf']")), 20000)
        await driver.wait(until.elementIsVisible(data5), 20000);
        await data5.sendKeys(0.5);
        const data6 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_kz-NFEn']")), 20000)
        await driver.wait(until.elementIsVisible(data6), 20000);
        await data6.sendKeys(2.5);
        const data7 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_w40hE13']")), 20000)
        await driver.wait(until.elementIsVisible(data7), 20000);
        await data7.sendKeys(3.5);
        const data8 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_ekALsHZ']")), 20000)
        await driver.wait(until.elementIsVisible(data8), 20000);
        await data8.sendKeys(0.6);
        const data9 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_9I5RgoV']")), 20000)
        await driver.wait(until.elementIsVisible(data9), 20000);
        await data9.sendKeys(4.1);
        const data10 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_98jENiB']")), 20000)
        await driver.wait(until.elementIsVisible(data10), 20000);
        await data10.sendKeys(4.2);
        const data11 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_xJIcxn3']")), 20000)
        await driver.wait(until.elementIsVisible(data11), 20000);
        await data11.sendKeys(0.8);
        const data12 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_e-bMkLV']")), 20000)
        await driver.wait(until.elementIsVisible(data12), 20000);
        await data12.sendKeys(5.0);

        const data = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_CFgxDo6']")), 20000)
        await driver.wait(until.elementIsVisible(data), 20000);
        await data.sendKeys(5.2);

        const data13 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_B1fAFJ9']")), 20000)
        await driver.wait(until.elementIsVisible(data13), 20000);
        await data13.sendKeys(5.4);
        const data14 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_ZhUiHRj']")), 20000)
        await driver.wait(until.elementIsVisible(data14), 20000);
        await data14.sendKeys(1.0);


        console.log("data has been stored");
        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');

        const savebutton = await driver.wait(until.elementLocated(By.xpath("//*[@id='simple-tabpanel-0']/div/p/div/div/div[2]/button[2]")), 20000);
        await driver.wait(until.elementIsVisible(savebutton), 20000);
        await savebutton.click();
        console.log("Clicked on Runz option");
        const Graphbutton = await driver.wait(until.elementLocated(By.xpath("//*[@id='simple-tabpanel-0']/div/p/div/div/div[2]/button[1]")), 20000);
        await driver.wait(until.elementIsVisible(Graphbutton), 20000);
        await driver.executeScript("arguments[0].click()", Graphbutton);
        console.log("Clicked on graph option");

        const graphoption = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/div/div/div")), 20000);
        await driver.wait(until.elementIsVisible(graphoption), 20000);
        await graphoption.click();

        const graphoption1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='menu-']/div[3]/ul/li[1]")), 30000);
        await driver.wait(until.elementIsVisible(graphoption1), 30000);
        await graphoption1.click();

        const graphoption2 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span[1]/div/select/option[2]")), 30000);
        await driver.wait(until.elementIsVisible(graphoption2), 30000);
        await graphoption2.click();
        const cells = [
          [1.5, 0.5, 2],
          [2, 0.5, 2.5],
          [3.5, 0.6, 4.1],
          [4.2, 0.8, 5.1]
        ];
        
        for (let i = 0; i < cells.length; i++) {
          for (let j = 0; j < cells[i].length; j++) {
            const cell = await driver.wait(
              until.elementLocated(By.xpath(
                `//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[${i+1}]/td[${j+1}]/input`)), 20000);
                //*[@id="generator"]/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[1]/td[2]/input
                            await driver.wait(until.elementIsVisible(cell), 20000);
            await cell.sendKeys(cells[i][j]);
          }
        }
        
 } catch (error) {
        console.log("checkcheckcheck");
    }
}
AddRunz();