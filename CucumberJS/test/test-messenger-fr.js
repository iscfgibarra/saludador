var expect = require("chai").expect;
const Messenger = require("../lib/messenger");

/*
 MSG1: "Bonjour!",
    MSG2: "Bonsoir!",
    MSG3: "Bonne nuit!"
 */

describe("Messenger Frances", function() {
  describe("Bonjour limite inferior", function() {
    it("return Bonjour!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("FR");
      //Act
      let message = mesenger.getMessage(new Date(2020, 02, 11, 0, 0, 0));
      //Assert
      expect(message).to.equal("Bonjour!");
      done();
    });
  });

  describe("Bonjour limite superior", function() {
    it("return Bonjour!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("FR");
      //Act
      let message = mesenger.getMessage(new Date(2020, 02, 11, 11, 59, 59));
      //Assert
      expect(message).to.equal("Bonjour!");
      done();
    });
  });

  describe("Bonsoir limite inferior", function() {
    it("return Bonsoir!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("FR");
      //Act
      let message = mesenger.getMessage(new Date(2020, 02, 11, 12, 0, 0));
      //Assert
      expect(message).to.equal("Bonsoir!");
      done();
    });
  });

  describe("Bonsoir limite superior", function() {
    it("return Bonsoir!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("FR");
      //Act
      let message = mesenger.getMessage(new Date(2020, 02, 11, 17, 59, 59));
      //Assert
      expect(message).to.equal("Bonsoir!");
      done();
    });
  });

  describe("Bonne nuit limite inferior", function() {
    it("return Bonne nuit!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("FR");
      //Act
      let message = mesenger.getMessage(new Date(2020, 02, 11, 18, 0, 0));
      //Assert
      expect(message).to.equal("Bonne nuit!");
      done();
    });
  });

  describe("Bonne nuit limite superior", function() {
    it("return Bonne nuit!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("FR");
      //Act
      let message = mesenger.getMessage(new Date(2020, 02, 11, 23, 59, 59));
      //Assert
      expect(message).to.equal("Bonne nuit!");
      done();
    });
  });
});
