const { Builder, Key, By, until, error } = require("selenium-webdriver");

async function Runz() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.manage().window().maximize();
       
    await driver.get("http://testrunz.com/#/");
    console.log("Navigated to http://testrunz.com/#/");
     
    // const logo = await driver.wait(until.elementLocated(By.xpath("//*[@id='institutes']/div[2]/div/div/img")),30000);
    // await driver.executeScript("arguments[0].click()",logo);
    // console.log("logoed");

    const contactid= await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div/div/div[2]/section[4]/div[2]/section/div/div/form/div/div[1]/div/input")),30000);
    await contactid.sendKeys("demo");

    
    const mailid= await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div/div/div[2]/section[4]/div[2]/section/div/div/form/div/div[2]/div/input")),30000);
    await driver.executeScript("arguments[0].scrollIntoView();", mailid);
    await mailid.sendKeys("abinaya.learny@gmail.com");
    
    const message = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div/div/div[2]/section[4]/div[2]/section/div/div/form/div/div[3]/div/textarea")), 60000);
    await driver.wait(until.elementIsVisible(message), 60000);
    await driver.wait(until.elementIsEnabled(message),60000);
    await driver.executeScript("arguments[0].scrollIntoView();arguments[0].click()", message);

    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');  

    await message.sendKeys("I cant create a runz in em2 lab");
    console.log("Message Delivered");
    
    const getstarted = await driver.findElement(By.xpath("/html/body/div/div/div/div/div/div[2]/div[1]/div/div/div[1]/div/div/button"));
     await driver.executeScript("arguments[0].click()",getstarted)
     console.log(" Sign In Successfully");
    
// const submit = await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div/div/div[2]/section[4]/div[2]/section/div/div/form/div/div[4]/div/button")), 30000);
// await driver.wait(until.elementIsVisible(submit), 30000);
// await driver.executeScript("arguments[0].scrollIntoView();arguments[0].click()", submit);



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
    
    const logout = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/header/div/div/button"));
await logout.click();
    console.log("Clicked on Submit button");
  
  } catch (error) {
    console.log(error)
  };
}
Runz();
