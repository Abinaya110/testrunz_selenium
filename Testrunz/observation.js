const { Builder, Key, By, until, error } = require("selenium-webdriver");

async function Runz() {
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
    await driver.executeScript("arguments[0].click()", plus)
    console.log("Adding Runz");
    plusClicked = true;
    const descriptionField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]/div/div/div/div/form/div[1]/div/input`)));
    await descriptionField.sendKeys(`abinaya`);
    const university = await driver.wait(until.elementLocated(By.xpath("//*[@id='controllable-states-demo']")));
    await driver.wait(until.elementIsVisible(university), 20000);
    await driver.wait(until.elementIsEnabled(university),20000);
    await driver.executeScript("arguments[0].click()", university);
    const university1 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[8]/div/ul/li[1]")));
    await driver.wait(until.elementIsVisible(university1), 20000);
    await driver.executeScript("arguments[0].click()", university1);




    const createRunz = await driver.wait(until.elementLocated(By.xpath("//*[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft'][@value='Three phase alternator_acet']")), 20000)
    await driver.wait(until.elementIsVisible(createRunz), 30000);
    await driver.executeScript("arguments[0].click()", createRunz);
    console.log("Procedure has be opened ");
    const runInputValues = async (inputValues) => {
      if (!inputValues || inputValues.length === 0) {
        console.log("Input values array is empty or undefined");
        return;
      }
      const inputCells = [];

      for (let i = 1; i <= inputValues.length; i++) {
        for (let j = 1; j <= 15; j++) {
          const cell = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[${i + 2}]/td[${j + 1}]/input`)), 30000);
          await driver.wait(until.elementIsVisible(cell), 30000);
          inputCells.push(cell);
        }
      }

      for (let i = 0; i < inputValues.length; i++) {
        for (let j = 0; j < 15; j++) {
          await inputCells[(i * 15) + j].sendKeys(inputValues[i][j].toString());
        }
      }
    };

    const inputValues1 = [

      [220, 2.4, 0.45, 528, 0, 415, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [220, 4, 0.45, 880, 522.97, 357.08, 380, 1, 5, 200, 50, 200, 400, 92.01, 8.4],
      [220, 6, 0.45, 1520, 526.75, 793.25, 370, 1.8, 100, 400, 100, 400, 800, 99.8, 10.8],
      [220, 8, 0.45, 1760, 531.84, 1228.16, 360, 2.5, 120, 480, 100, 400, 880, 71.65, 13.2],
      [220, 9, 0.45, 1980, 540.81, 1439.19, 350, 3.4, 180, 720, 120, 480, 1200, 83.38, 15.6],
      [220, 12, 0.45, 2640, 563.53, 2076.47, 310, 5, 260, 1040, 150, 600, 1640, 79.98, 25.3],];

    await runInputValues(inputValues1);
    const Ravalue = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_ccFw2lP']")));
    await Ravalue.sendKeys("1.69");
    const runInputValues2 = async (inputValues2) => {
      if (!inputValues2 || inputValues2.length === 0) {
        console.log("Input values array is empty or undefined");
        return;
      }
      const inputCells2 = [];
      for (let a = 1; a <= inputValues2.length; a++) {
        for (let b = 1; b <= 6; b++) {
          const cell2 = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[1]/div/div[1]/form/table[3]/tbody/tr[${a + 1}]/td[${b + 1}]/input`)), 60000);
          await driver.wait(until.elementIsVisible(cell2), 60000);
          inputCells2.push(cell2);
        }
      }
      for (let a = 0; a < inputValues2.length; a++) {
        for (let b = 0; b < 6; b++) {
          await inputCells2[(a * 6) + b].sendKeys(inputValues2[a][b].toString());

        }
      }
    };
    const inputValues2 = [


      [220, 2.4, 0.45, 1.95, 6.42, 521.28],

    ];
    await runInputValues2(inputValues2);
    console.log("data has been stored");

    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    const savebutton = await driver.wait(until.elementLocated(By.xpath("//*[@id='simple-tabpanel-0']/div/p/div/div/div/div[2]/button[2]")), 20000);
    await driver.wait(until.elementIsVisible(savebutton), 20000);
    await driver.executeScript("arguments[0].click()", savebutton);
    console.log("Clicked on Runz option");
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    const Graphbutton = await driver.wait(until.elementLocated(By.xpath("//*[@id='simple-tabpanel-0']/div/p/div/div/div/div[2]/button[1]")), 20000);
    await driver.wait(until.elementIsVisible(Graphbutton), 20000);
    await driver.executeScript("arguments[0].click()", Graphbutton);
    console.log("Clicked on graph option");
    const graphoption = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/div/div/div")), 20000);
    await driver.wait(until.elementIsVisible(graphoption), 20000);
    await graphoption.click();

    const graphoption1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='menu-']/div[3]/ul/li[1]")), 30000);
    await driver.wait(until.elementIsVisible(graphoption1), 30000);
    await graphoption1.click();
    console.log("graph column");

    const graphoption2 = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/select")), 30000);
    await driver.wait(until.elementIsVisible(graphoption2), 30000);
    await graphoption2.click();
    driver.executeScript("arguments[0].scrollIntoView(true);", graphoption2);
    console.log("column -2 ");


    const graphoption3 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[1]/div/div[2]/div/span/div/select/option[2]")), 30000);
    await driver.wait(until.elementIsVisible(graphoption3), 30000);
    await graphoption3.click();
    const element = driver.findElement(By.xpath("//input[@value='x1']"));
    await element.clear();
    const x1value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span[1]/div/div/div[1]/table/thead/tr/th[1]/input")), 20000);
    await driver.wait(until.elementIsVisible(x1value), 20000);
    await x1value.sendKeys("Load current");
    console.log("Graph Title-1 enterted");
    const element1 = driver.findElement(By.xpath("//input[@value='y1']"));
    await element1.clear();
    const y1value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span[1]/div/div/div[1]/table/thead/tr/th[2]/input")), 20000);
    await driver.wait(until.elementIsVisible(y1value), 20000);
    await y1value.sendKeys("Transformer-A");
    console.log("Graph Title-2 enterted");
    const element2 = driver.findElement(By.xpath("//input[@value='y2']"));
    await element2.clear();
    console.log("removed y2");
    const y2value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/thead/tr/th[3]/input")), 20000);
    await driver.wait(until.elementIsVisible(y2value), 20000);
    await y2value.sendKeys("Transformer-B");
    console.log("Graph Title-3 enterted");
    const tableData = [
      [1.5, 0.5, 2],
      [2.0, 0.5, 2.5],
      [3.5, 0.6, 4.1],
      [4.2, 0.8, 5.1]
    ];

    for (let i = 0; i < tableData.length; i++) {
      for (let j = 0; j < tableData[i].length; j++) {
        const cell = await driver.wait(until.elementLocated(By.xpath(`//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[${i + 1}]/td[${j + 1}]/input`)), 20000);
        await driver.wait(until.elementIsVisible(cell), 20000);
        await cell.sendKeys(tableData[i][j]);
      }
    }

    console.log("graph data are plotted");
    const generatebutton = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/button[1]")), 30000);
    await driver.executeScript("arguments[0].click()", generatebutton);
    await driver.wait(until.elementIsVisible(generatebutton), 30000);
    console.log("generatebutton worked");

    const updatebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[1]/div/div[2]/div/span/div/button[2]")), 30000);
    await driver.executeScript("arguments[0].click()", updatebutton);
    await driver.wait(until.elementIsVisible(updatebutton), 30000);
    console.log("Update button worked");

    const datasavedbutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div[6]/button[1]")), 30000);
    await driver.wait(until.elementIsVisible(datasavedbutton), 30000);
    await datasavedbutton.click();
    console.log("Savebutton worked");
    console.log("Three phase alternator successfully created ")


    await driver.get("http://testrunz.com/#/runz");
    console.log("Navigated to http://testrunz.com/#/runz");

    const shareicon = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[3]/div/div/div/table/tbody/tr[1]/td[8]/div/button[1]")), 3000);
    await driver.wait(until.elementIsVisible(shareicon), 30000);
    await shareicon.click();
    console.log("shared runz");

    const sharerunz = await driver.wait(until.elementLocated(By.xpath("//*[@id='outlined-basic']")));
    await driver.wait(until.elementIsVisible(sharerunz));
    await sharerunz.sendKeys("hema.learny@gmail.com");

    const sharedRunz = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div[2]/button/span[1]")), 3000);
    await driver.wait(until.elementIsVisible(sharedRunz), 30000);
    await sharedRunz.click();
    console.log(" sharedRunz");

    const keyoption = await driver.wait(until.elementLocated(By.xpath("/html/body/div[6]/div/div[6]/button[1]")), 3000);
    await driver.wait(until.elementIsVisible(keyoption), 30000);
    await driver.wait(until.elementIsEnabled(keyoption), 30000);
    await keyoption.click();
    console.log(" sharedRunz");


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //   async function Exp2() {

    //     await driver.get("http://testrunz.com/#/runz");
    //     console.log("Navigated to http://testrunz.com/#/runz");
    //     const plus = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[4]/div/div/span/button/span[1]/span")), 20000);
    //     await driver.wait(until.elementIsVisible(plus), 20000);
    //     await plus.click();
    //     console.log("Adding Runz");
    //     plusClicked = true;
    //     const descriptionField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[4]/div/div/div/div/form/div[1]/div/input`)));
    //     await descriptionField.sendKeys(`Three phase Induction motor`);
    //     const labTypeDropdown = await driver.wait(until.elementLocated(By.xpath(`//*[@id='controllable-states-demo']`))); labTypeDropdown.click();
    //     const option = await driver.wait(until.elementLocated(By.xpath(`//*[@id="controllable-states-demo-option-0"]`))); option.click();
    //     const procedureNameField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]/div/div/div/div/form/div[3]/div/div/input`))); procedureNameField.click();
    //     const option1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id='controllable-states-demo-option-0']`))); option1.click();
    //     const clickSaveButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/form/button[1]/span[1]"))); clickSaveButton.click();


    //     const createRunz = await driver.wait(until.elementLocated(By.xpath("//*[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft'][@value='Three phase Induction motor_acet']")), 20000)
    //     await driver.wait(until.elementIsVisible(createRunz), 30000);
    //     await driver.executeScript("arguments[0].click()", createRunz);
    //     console.log("Procedure has been opened");
    //     const runInputValues = async (inputValues) => {
    //       if (!inputValues || inputValues.length === 0) {
    //         console.log("Input values array is empty or undefined");
    //         return;
    //       }
    //       const inputCells = [];

    //       for (let i = 1; i <= inputValues.length; i++) {
    //         for (let j = 1; j <= 13; j++) {
    //           const cell = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[${i + 2}]/td[${j + 1}]/input`)), 30000);
    //           await driver.wait(until.elementIsVisible(cell), 30000);
    //           inputCells.push(cell);
    //         }
    //       }

    //       for (let i = 0; i < inputValues.length; i++) {
    //         for (let j = 0; j < 13; j++) {
    //           await inputCells[(i * 13) + j].sendKeys(inputValues[i][j].toString());
    //         }
    //       }
    //     };

    //     const inputValues1 = [

    //       [415, 2.4, 0.45, 528, 0, 415, 0, 0, 0, 0, 0, 0, 0],
    //       [415, 4, 0.45, 880, 522.97, 357.08, 380, 1, 5, 200, 50, 200, 400],
    //       [415, 6, 0.45, 1520, 526.75, 793.25, 370, 1.8, 100, 400, 100, 400, 800],
    //       [415, 8, 0.45, 1760, 531.84, 1228.16, 360, 2.5, 120, 480, 100, 400, 880],
    //       [415, 9, 0.45, 1980, 540.81, 1439.19, 350, 3.4, 180, 720, 120, 480, 1200],
    //       [415, 12, 0.45, 2640, 563.53, 2076.47, 310, 5, 260, 1040, 150, 600, 1640],];

    //     await runInputValues(inputValues1);
    //     const Ravalue = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_EVE0MQI']")));
    //     await Ravalue.sendKeys("0.1");
    //     const Ravalue1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_55PPLRo']")));
    //     await Ravalue1.sendKeys("1500");

    //     const savebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[2]/button[2]")), 20000);
    //     await driver.wait(until.elementIsVisible(savebutton), 20000);
    //     await driver.executeScript("arguments[0].click()", savebutton);
    //     await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');

    //     console.log("Clicked on Runz option");
    //     const Graphbutton = await driver.wait(until.elementLocated(By.xpath("//*[@id='simple-tabpanel-0']/div/p/div/div/div[2]/button[1]")), 20000);
    //   await driver.wait(until.elementIsVisible(Graphbutton), 20000);
    //   await driver.executeScript("arguments[0].click()", Graphbutton);
    //   console.log("Clicked on graph option");
    //   const graphoption = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/div/div/div")), 20000);
    //   await driver.wait(until.elementIsVisible(graphoption), 20000);
    //   await graphoption.click();
    //   const graphoption1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='menu-']/div[3]/ul/li[1]")), 30000);
    //   await driver.wait(until.elementIsVisible(graphoption1), 30000);
    //   await graphoption1.click();
    //   console.log("graph column");
    //   const graphoption2 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/span/div/select")), 30000);
    //   await driver.wait(until.elementIsVisible(graphoption2), 30000);
    //   await driver.executeScript("arguments[0].click()", graphoption2);
    //   driver.executeScript("arguments[0].scrollIntoView(true);", graphoption2);
    //   console.log("column -2 ");
    //   const graphoption3 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/span/div/select/option[2]")), 30000);
    //   await driver.wait(until.elementIsVisible(graphoption3), 30000);
    //   await graphoption3.click();
    //   const element = driver.findElement(By.xpath("//input[@value='x1']"));
    //   await element.clear();
    //   const x1value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span[1]/div/div/div[1]/table/thead/tr/th[1]/input")), 20000);
    //   await driver.wait(until.elementIsVisible(x1value), 20000);
    //   await x1value.sendKeys("Load current");
    //   console.log("Graph Title-1 enterted");
    //   const element1 = driver.findElement(By.xpath("//input[@value='y1']"));
    //   await element1.clear();
    //   const y1value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span[1]/div/div/div[1]/table/thead/tr/th[2]/input")), 20000);
    //   await driver.wait(until.elementIsVisible(y1value), 20000);
    //   await y1value.sendKeys("Transformer-A");
    //   console.log("Graph Title-2 enterted");
    //   const element2 = driver.findElement(By.xpath("//input[@value='y2']"));
    //   await element2.clear();
    //   console.log("removed y2");
    //   const y2value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/thead/tr/th[3]/input")), 20000);
    //   await driver.wait(until.elementIsVisible(y2value), 20000);
    //   await y2value.sendKeys("Transformer-B");
    //   console.log("Graph Title-3 enterted");

    //   const tableData = [
    //     [1.5, 0.5, 2],
    //     [2.0, 0.5, 2.5],
    //     [3.5, 0.6, 4.1],
    //     [4.2, 0.8, 5.1]
    //   ];

    //   for (let i = 0; i < tableData.length; i++) {
    //     for (let j = 0; j < tableData[i].length; j++) {
    //       const cell = await driver.wait(until.elementLocated(By.xpath(`//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[${i + 1}]/td[${j + 1}]/input`)), 20000);
    //       await driver.wait(until.elementIsVisible(cell), 20000);
    //       await cell.sendKeys(tableData[i][j]);
    //     }
    //   }

    //   console.log("graph data are plotted");
    //   const generatebutton = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/button[1]")), 30000);
    //   await driver.executeScript("arguments[0].click()", generatebutton);
    //   await driver.wait(until.elementIsVisible(generatebutton), 30000);
    //   console.log("generatebutton worked");

    //   const updatebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/span/div/button[2]")), 30000);
    //   await driver.executeScript("arguments[0].click()", updatebutton);
    //   await driver.wait(until.elementIsVisible(updatebutton), 30000);
    //   console.log("Update button worked");

    //   const datasavedbutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div[6]/button[1]")), 30000);
    //   await driver.wait(until.elementIsVisible(datasavedbutton), 30000);
    //   await datasavedbutton.click();
    //   console.log("Savebutton worked");

    //     console.log("Three phase Induction motor successfully created ");

    //     await driver.get("http://testrunz.com/#/runz");
    //     console.log("Navigated to http://testrunz.com/#/runz");

    //     const shareicon= await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[3]/div/div/div/table/tbody/tr[1]/td[8]/div/button[1]")),3000);
    //   await driver.wait(until.elementIsVisible(shareicon), 30000);
    //   await shareicon.click();
    //   console.log("shared runz");

    //   const sharerunz= await driver.wait(until.elementLocated(By.xpath("//*[@id='outlined-basic']")));
    //   await driver.wait(until.elementIsVisible(sharerunz));
    //   await sharerunz.sendKeys("hema.learny@gmail.com");

    //   const sharedRunz= await driver.wait(until.elementLocated(By.xpath("/html/body/div[5]/div/div/div[2]/button/span[1]")),3000);
    //   await driver.wait(until.elementIsVisible( sharedRunz), 30000);
    //   await driver.executeScript("arguments[0].click()", sharedRunz);
    //   console.log(" sharedRunz");


    //   }
    //   Exp2();
    //   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //   async function Exp3() {

    //     await driver.get("http://testrunz.com/#/runz");
    //     console.log("Navigated to http://testrunz.com/#/runz");
    //     const plus = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[4]/div/div/span/button/span[1]/span")), 20000);
    //     await driver.wait(until.elementIsVisible(plus), 20000);
    //     await driver.executeScript("arguments[0].click()", plus);
    //     console.log("Adding Runz");
    //     plusClicked = true;
    //     const descriptionField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]/div/div/div/div/form/div[1]/div/input`)));
    //     await descriptionField.sendKeys(`squirel cage`);
    //     const labTypeDropdown = await driver.wait(until.elementLocated(By.xpath(`//*[@id='controllable-states-demo']`))); labTypeDropdown.click();
    //     const option = await driver.wait(until.elementLocated(By.xpath(`//*[@id="controllable-states-demo-option-1"]`))); option.click();
    //     const procedureNameField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]/div/div/div/div/form/div[3]/div/div/input`))); procedureNameField.click();
    //     const option1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id='controllable-states-demo-option-0']`))); option1.click();
    //     const clickSaveButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/form/button[1]/span[1]"))); clickSaveButton.click();


    //     const createRunz = await driver.wait(until.elementLocated(By.xpath("//*[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft'][@value='Three phase Induction motor_acet']")), 20000)
    //     await driver.wait(until.elementIsVisible(createRunz), 30000);
    //     await driver.executeScript("arguments[0].click()", createRunz);
    //     console.log("Procedure has been opened");
    //     const runInputValues = async (inputValues) => {
    //       if (!inputValues || inputValues.length === 0) {
    //         console.log("Input values array is empty or undefined");
    //         return;
    //       }
    //       const inputCells = [];

    //       for (let i = 1; i <= inputValues.length; i++) {
    //         for (let j = 1; j <= 15; j++) {
    //           const cell = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[1]/form/table[2]/tbody/tr[${i + 2}]/td[${j + 1}]/input`)), 30000);
    //           await driver.wait(until.elementIsVisible(cell), 30000);
    //           inputCells.push(cell);
    //         }
    //       }

    //       for (let i = 0; i < inputValues.length; i++) {
    //         for (let j = 0; j < 15; j++) {
    //           await inputCells[(i * 15) + j].sendKeys(inputValues[i][j].toString());
    //         }
    //       }
    //     };

    //     const inputValues1 = [

    //       [415, 2.4, 0.45, 528, 0, 415, 0, 0, 0, 0, 0, 0, 0],
    //       [415, 4, 0.45, 880, 522.97, 357.08, 380, 1, 5, 200, 50, 200, 400],
    //       [415, 6, 0.45, 1520, 526.75, 793.25, 370, 1.8, 100, 400, 100, 400, 800],
    //       [415, 8, 0.45, 1760, 531.84, 1228.16, 360, 2.5, 120, 480, 100, 400, 880],
    //       [415, 9, 0.45, 1980, 540.81, 1439.19, 350, 3.4, 180, 720, 120, 480, 1200],
    //       [415, 12, 0.45, 2640, 563.53, 2076.47, 310, 5, 260, 1040, 150, 600, 1640],];

    //     await runInputValues(inputValues1);
    //     // const Ravalue = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_EVE0MQI']")));
    //     // await Ravalue.sendKeys("0.1");
    //     // const Ravalue1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='value_55PPLRo']")));
    //     // await Ravalue1.sendKeys("1500");

    //     const savebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[2]/button[2]")), 20000);
    //     await driver.wait(until.elementIsVisible(savebutton), 20000);
    //     await driver.executeScript("arguments[0].click()", savebutton);
    //     await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');

    //     console.log("Clicked on Runz option");
    //     const Graphbutton = await driver.wait(until.elementLocated(By.xpath("//*[@id='simple-tabpanel-0']/div/p/div/div/div[2]/button[1]")), 20000);
    //   await driver.wait(until.elementIsVisible(Graphbutton), 20000);
    //   await driver.executeScript("arguments[0].click()", Graphbutton);
    //   console.log("Clicked on graph option");
    //   const graphoption = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/div/div/div")), 20000);
    //   await driver.wait(until.elementIsVisible(graphoption), 20000);
    //   await graphoption.click();
    //   const graphoption1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='menu-']/div[3]/ul/li[1]")), 30000);
    //   await driver.wait(until.elementIsVisible(graphoption1), 30000);
    //   await graphoption1.click();
    //   console.log("graph column");
    //   const graphoption2 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/span/div/select")), 30000);
    //   await driver.wait(until.elementIsVisible(graphoption2), 30000);
    //   await driver.executeScript("arguments[0].click()", graphoption2);
    //   driver.executeScript("arguments[0].scrollIntoView(true);", graphoption2);
    //   console.log("column -2 ");
    //   const graphoption3 = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/span/div/select/option[2]")), 30000);
    //   await driver.wait(until.elementIsVisible(graphoption3), 30000);
    //   await graphoption3.click();
    //   const element = driver.findElement(By.xpath("//input[@value='x1']"));
    //   await element.clear();
    //   const x1value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span[1]/div/div/div[1]/table/thead/tr/th[1]/input")), 20000);
    //   await driver.wait(until.elementIsVisible(x1value), 20000);
    //   await x1value.sendKeys("Load current");
    //   console.log("Graph Title-1 enterted");
    //   const element1 = driver.findElement(By.xpath("//input[@value='y1']"));
    //   await element1.clear();
    //   const y1value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span[1]/div/div/div[1]/table/thead/tr/th[2]/input")), 20000);
    //   await driver.wait(until.elementIsVisible(y1value), 20000);
    //   await y1value.sendKeys("Transformer-A");
    //   console.log("Graph Title-2 enterted");
    //   const element2 = driver.findElement(By.xpath("//input[@value='y2']"));
    //   await element2.clear();
    //   console.log("removed y2");
    //   const y2value = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/thead/tr/th[3]/input")), 20000);
    //   await driver.wait(until.elementIsVisible(y2value), 20000);
    //   await y2value.sendKeys("Transformer-B");
    //   console.log("Graph Title-3 enterted");

    //   const tableData = [
    //     [1.5, 0.5, 2],
    //     [2.0, 0.5, 2.5],
    //     [3.5, 0.6, 4.1],
    //     [4.2, 0.8, 5.1]
    //   ];

    //   for (let i = 0; i < tableData.length; i++) {
    //     for (let j = 0; j < tableData[i].length; j++) {
    //       const cell = await driver.wait(until.elementLocated(By.xpath(`//*[@id='generator']/div/div[2]/div/span/div/div/div[1]/table/tbody/tr[${i + 1}]/td[${j + 1}]/input`)), 20000);
    //       await driver.wait(until.elementIsVisible(cell), 20000);
    //       await cell.sendKeys(tableData[i][j]);
    //     }
    //   }

    //   console.log("graph data are plotted");
    //   const generatebutton = await driver.wait(until.elementLocated(By.xpath("//*[@id='generator']/div/div[2]/div/span/div/button[1]")), 30000);
    //   await driver.executeScript("arguments[0].click()", generatebutton);
    //   await driver.wait(until.elementIsVisible(generatebutton), 30000);
    //   console.log("generatebutton worked");

    //   const updatebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div[1]/div/div[2]/div/span/div/button[2]")), 30000);
    //   await driver.executeScript("arguments[0].click()", updatebutton);
    //   await driver.wait(until.elementIsVisible(updatebutton), 30000);
    //   console.log("Update button worked");

    //   const datasavedbutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div[6]/button[1]")), 30000);
    //   await driver.wait(until.elementIsVisible(datasavedbutton), 30000);
    //   await datasavedbutton.click();
    //   console.log("Savebutton worked");

    //     console.log(" successfully created ");

    //     await driver.get("http://testrunz.com/#/runz");
    //     console.log("Navigated to http://testrunz.com/#/runz");

    //     const shareicon= await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[3]/div/div/div/table/tbody/tr[1]/td[8]/div/button[1]")),3000);
    //   await driver.wait(until.elementIsVisible(shareicon), 30000);
    //   await shareicon.click();
    //   console.log("shared runz");

    //   const sharerunz= await driver.wait(until.elementLocated(By.xpath("//*[@id='outlined-basic']")));
    //   await driver.wait(until.elementIsVisible(sharerunz));
    //   await sharerunz.sendKeys("hema.learny@gmail.com");

    //   const sharedRunz= await driver.wait(until.elementLocated(By.xpath("/html/body/div[5]/div/div/div[2]/button/span[1]")),3000);
    //   await driver.wait(until.elementIsVisible( sharedRunz), 30000);
    //   await driver.executeScript("arguments[0].click()", sharedRunz);
    //   console.log(" sharedRunz");
    // }
    //   Exp3();
  } catch (error) {
    console.log(error);
  }
}

Runz();
