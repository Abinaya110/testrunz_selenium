const{By,Builder,until,Key}=require("selenium-webdriver");
async function runz(){
const driver= await new Builder().forBrowser("chrome").build();

try {
   
   await driver.manage().window().maximize(); 

   console.log("Navigated to http://testrunz.com/#/");

   const signInButton = await driver.findElement(By.xpath("//*[@id='navbarCollapse']/ul/li[2]/a"));
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


   const plus = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[4]/div/div/span/button/span[1]/span")), 20000);
   await driver.wait(until.elementIsVisible(plus), 20000);
   await plus.click();
   console.log("Adding Runz");
   plusClicked = true;
   const descriptionField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[4]/div/div/div/div/form/div[1]/div/input`)));
   await descriptionField.sendKeys(`Squirrel cage Rotor_acet`);
   const labTypeDropdown = await driver.wait(until.elementLocated(By.xpath(`//*[@id='controllable-states-demo']`))); labTypeDropdown.click();
   const option = await driver.wait(until.elementLocated(By.xpath(`//*[@id="controllable-states-demo-option-0"]`))); option.click();
   const procedureNameField = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[3]/div/div/div/div/form/div[3]/div/div/input`))); procedureNameField.click();
   const option1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id='controllable-states-demo-option-2']`))); option1.click();
   const clickSaveButton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/div/div/div/form/button[1]/span[1]"))); clickSaveButton.click();



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

     

   const savebutton = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/p/div/div/div/div[2]/button[2]")), 20000);
   await driver.wait(until.elementIsVisible(savebutton), 20000);
   await driver.executeScript("arguments[0].click()", savebutton);
   console.log("Clicked on Runz option");























} catch (error) {
    console.log(error);
}


}
runz();
