const { Builder, By, } = require("selenium-webdriver");


const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function test() {
    try {
        await driver.get("https://yosnalab.com/register");
        await driver.findElement(By.xpath("//*[@id='username']")).sendKeys("passeld");
        await driver.findElement(By.xpath("//select[@type='text'][@class='form-control textbox']")).click();
        await driver.findElement(By.xpath("//option[@value='1'][text()='Student']")).click();
        await driver .findElement(By.xpath("//*[@id='email']")).sendKeys("ahobbb@gmail.com");
        await driver.findElement(By.xpath("//input[@type='radio'][@id='gender2']")).click();
        await driver.findElement(By.xpath("//*[@id='mobile']")).sendKeys("9789226037");
        await driver.findElement(By.xpath("//*[@id='institution1']")).click();
        await driver.findElement(By.xpath("//*[@id='institution1']/option[481]")).click();
        await driver.findElement(By.xpath("//*[@id='password']")).sendKeys("demotesting123");
        await driver.findElement(By.xpath("//*[@id='form_sample_1']/div[1]/div[2]/div[1]/div[9]/div/div/input[2]")).click();
        await driver.findElement(By.xpath("//*[@id='repassword']")).sendKeys("demotesting123");
        await driver.findElement(By.xpath("//*[@id='form_sample_1']/div[1]/div[2]/div[1]/div[10]/div/div/input[2]")).click();
        await driver.findElement(By.xpath("//*[@id='acccreate']")).click();

        

    }
    catch {
        (error);
        console.log(error)
    }
}
test();

