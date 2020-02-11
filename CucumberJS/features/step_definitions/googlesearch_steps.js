const assert = require("assert");
const { Before, Given, When, Then } = require("cucumber");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");
const { Builder, Key, By, until } = require("selenium-webdriver");
const screen = {
  width: 640,
  height: 480
};
let driver;
Given("i go to google", async function() {
  // driver = await new Builder().forBrowser('chrome').build();

  driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();

  await driver.get("https://google.com");
  driver
    .wait(until.elementLocated(By.name("q")), 5000)
    .then(function(elm) {
      callback(true);
    })
    .catch(function(ex) {
      callback(false);
    });
});

When("i make a search", async function() {
  // Find the search box by id
  await driver.findElement(By.name("q")).click();
  // Enter keywords and click enter
  await driver
    .findElement(By.name("q"))
    .sendKeys("infected human coronavirus", Key.RETURN);
  // Wait for the results box by id
  await driver.wait(until.elementLocated(By.id("rcnt")), 10000);
});

Then("should see results", async function() {
  // We will get the title value and test it
  let title = await driver.getTitle();
  assert.equal(title, "infected human - Buscar con Google");
  driver.close();
  // driver.quit();
});
