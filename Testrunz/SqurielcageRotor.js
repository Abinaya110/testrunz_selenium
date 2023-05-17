const { Builder, Key, By, until, error } = require("selenium-webdriver");

async function Runz() {
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



    const plus = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/header/div/div/button")), 20000);
    await driver.wait(until.elementIsVisible(plus), 20000);
    await driver.executeScript("arguments[0].click()",plus)

    console.log("Adding Runz");
    plusClicked = true;
    const descriptionField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]/div/div/div/div/form/div[1]/div/input`)));
    await descriptionField.sendKeys(`Squirrel cage Rotor_acet`);
    const labTypeDropdown = await driver.wait(until.elementLocated(By.xpath("//*[@id='controllable-states-demo']"))); 
    await driver.executeScript("arguments[0].click()", labTypeDropdown);

    const option = await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div/div/div/div/form/div[2]/div/div/input")));
    await driver.executeScript("arguments[0].click()", option);

    const procedureNameField = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/form/div[3]/div/div/input"))); 
    await driver.executeScript("arguments[0].click()", procedureNameField);

    const option1 = await driver.wait(until.elementLocated(By.xpath("//*[@id='controllable-states-demo-option-6']")));
    await driver.executeScript("arguments[0].click()", option1);

    const clickSaveButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/form/button[1]/span[1]"))); 
    await driver.executeScript("arguments[0].click()", clickSaveButton);




    const createRunz = await driver.wait(until.elementLocated(By.xpath("//*[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft'][@value='Squirrel cage Rotor_acet']")), 20000)
    await driver.wait(until.elementIsVisible(createRunz), 30000);
    await driver.executeScript("arguments[0].click()", createRunz);
    console.log("Procedure has be opened ");
  

    const values = [
      {xpath : "//*[@id='value_NCr2qlv']", value:"4"},
      {xpath:"//*[@id='value_AOd0tsn']", value:"1"},
      {xpath:"//*[@id='value_DTWTnWY']", value:"5"},
      {xpath:"//*[@id='value_jv-3FVR']", value:"30"},
      {xpath:"//*[@id='value_RDixRmT']", value:"0"},
      {xpath:"//*[@id='value_zBeFHWG']", value:"0"},
      {xpath:"//*[@id='value_LFJxoVi']", value:"200"},
      {xpath:"//*[@id='value_ojqoB9M']", value:"200"},
      {xpath:"//*[@id='value_L3e_cD4']", value:"200"},
    ];

    for (const item of values){

      const value = await driver.wait(until.elementLocated(By.xpath(item.xpath)));
      await value.sendKeys(item.value);
    }
console.log("data are stored");



const element = await driver.findElement(By.id("tinymce"))
await driver.executeScript("if(arguments[0].contentEditable === 'true') {arguments[0].innerText = '<p>fffffffffffffffffffffffffffffffffffffffffff</p>'}", element)
await driver.switchTo().defaultContent()
await driver.findElement(By.css(".MuiButtonBase-root:nth-child(2) path")).click()
const element1 = await driver.findElement(By.CSS_SELECTOR, "body")
await driver.actions({ bridge: true }).moveToElement(element1, 0, 0).perform()





    
    
    



//*[@id="tinymce"]/p

    const savebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[2]/button[2]")), 20000);
    await driver.wait(until.elementIsVisible(savebutton), 20000);
    await driver.executeScript("arguments[0].click()", savebutton);
    console.log("Clicked on save option");

    
    // const print = await driver.wait(until.elementLocated(By.xpath("//*[@id='simple-tabpanel-0']/div/p/div/div/div/div[2]/button[3]")), 20000);
    // await driver.wait(until.elementIsVisible(print), 20000);
    // await driver.wait(until.elementIsEnabled(print), 30000);
    // await print.click();
    // console.log("Clicked on print option");

   

    // try {
    //   const printButton = await driver.wait(until.elementLocated(By.xpath("//*[@id='sidebar']//print-preview-button-strip//div/cr-button[1]")), 30000);
    //   await driver.wait(until.elementIsVisible(printButton), 30000);
    //   await driver.wait(until.elementIsEnabled(printButton), 30000);
    //   await printButton.click();
    //   console.log("Print button clicked");
    // } catch (error) {
    //   console.error("Error occurred while trying to click on the Print button:", error);
    // }
    

    const recordbutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/header/div/div/div/button[3]/span[1]")),20000);
    await driver.wait(until.elementIsVisible(recordbutton), 20000);
    await driver.executeScript("arguments[0].click()", recordbutton);
    console.log("Clicked on record option");

    const calculatereslut = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[3]/div/p/div/div/div[2]/button[1]")),20000);
    await driver.wait(until.elementIsVisible(calculatereslut), 20000);
    await driver.wait(until.elementIsVisible(calculatereslut), 20000);
    await driver.wait(until.elementIsEnabled(calculatereslut), 30000);
    await calculatereslut.click();
    console.log("Clicked on record option");
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');







    
    // await driver.get("http://testrunz.com/#/runz");
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

}catch(error){
    console.log(error);
}

}
Runz();