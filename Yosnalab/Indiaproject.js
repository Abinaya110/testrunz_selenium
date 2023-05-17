const { Builder, By, } = require("selenium-webdriver");
const driver = new Builder()
    .forBrowser("chrome")
    .build();
driver.manage().window().maximize();
async function test() {
    try {
        await driver.get("https://yosnalab.com/index1");
        await driver.findElement(By.xpath("//*[@href='explore1']")).click();
        await driver.findElement(By.xpath("//*[@id='select2-fyear-container']")).click();
        // choose  year
        await driver.findElement(By.xpath("/html/body/span/span/span[2]/ul/li[4]")).click();
        // Filter College
        await driver.findElement(By.xpath("/html/body/div[9]/div[1]/div[2]/div/div/div/div/div/div[2]/div/div[2]/div/span/span[1]/span/span[1]/span")).click();
        await driver.findElement(By.xpath("/html/body/span/span/span[2]/ul/li[326]")).click();

        // choose resource 
        await driver.findElement(By.xpath("/html/body/div[9]/div[1]/div[2]/div/div/div/div/div/div[2]/div/div[3]/div/span/span[1]/span/span[1]/span")).click();
        await driver.findElement(By.xpath("/html/body/span/span/span[2]/ul/li[1]")).click();

        // select project 
        await driver.findElement(By.xpath("/html/body/div[9]/div[1]/div[2]/div/div/div/div/div/div[3]/div/div/div/div/div[2]/div/div[2]/h2/a")).click();
         await driver.findElement(By.xpath("/html/body/div[9]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/a/img")).click();


        // user id
        await driver.findElement(By.xpath("/html/body/div[9]/div/div[2]/div[3]/div/div/div/div[1]/div[1]/a[2]")).click();

        comment
        await driver.findElement(By.xpath("/html/body/div[9]/div/div[2]/div[3]/div/div/div/div[4]/div[4]/form/div/div/div[4]/div[3]")).sendKeys("Excellect project")
    } catch (error) {
        console.log(error)
    };
}
test();
