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

Given("i go to hello world app", { timeout: 3 * 5000},async function() {
  // Write code here that turns the phrase above into concrete actions
  driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().windowSize(screen))
    .build();

    await driver.get('http://localhost:3000/');
});

Then("should see {string}", async function(string) {
  // Write code here that turns the phrase above into concrete actions
  let text = await driver.findElement(By.tagName("body")).getText();
  assert.equal(text, string);
  driver.close();
  //driver.quit();
});
