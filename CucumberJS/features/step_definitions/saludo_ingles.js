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

Given("I open the webapp Saludador at {string}, select language {string} and click button Saludar", { timeout: 3 * 5000},async function(hora, lang) {
    // Write code here that turns the phrase above into concrete actions
    driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options().windowSize(screen))
      .build();
  
      await driver.get('http://localhost:3000/');
      let txtHora = await driver.findElement(By.id("hora"));
      txtHora.sendKeys(hora);

      driver.findElement(By.css(`#lang>option[value='${lang}']`)).click();
      
      let btnSaludar = await driver.findElement(By.id("saludar"));
      btnSaludar.click();
  });
  
  Then("should see greeting {string}", async function(string) {
    // Write code here that turns the phrase above into concrete actions
    let text = await driver.findElement(By.tagName("body")).getText();
    assert.equal(text, string);
    driver.close();
    //driver.quit();
  });
  