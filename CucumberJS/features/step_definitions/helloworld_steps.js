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

Given("i go to hello world app", function() {
  // Write code here that turns the phrase above into concrete actions
  driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().windowSize(screen))
    .build();

  driver
    .get("http://localhost:3000/")
    .then(function() {
      console.log(arguments);
    })
    .catch(function() {
      console.log(arguments);
    });
});

Then("should see {string}", async function(string) {
  // Write code here that turns the phrase above into concrete actions
  driver
    .wait(until.elementLocated(By.tagName("h1")), 10000)
    .then(function(elm) {
      let text = elm.getText();
      assert.equal(text, string);
      driver.close();
    })
    .catch(function(ex) {
      callback(false);
    });

  // let text = await driver.findElement(By.tagName("h1")).getText();
  // assert.equal(text, string);
  // driver.close();
  //driver.quit();
});
