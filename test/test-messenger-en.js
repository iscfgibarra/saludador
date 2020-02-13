var expect = require("chai").expect;
const Messenger = require("../lib/messenger");

describe("Messenger Ingles", function() {
  describe("Good morning limite inferior", function() {
    it("return Good morning!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("EN");
      //Act
      let message = mesenger.getMessage(0, 0);
      //Assert
      expect(message).to.equal("Good morning!");
      done();
    });
  });

  describe("Good morning limite superior", function() {
    it("return Good morning!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("EN");
      //Act
      let message = mesenger.getMessage(11, 59);
      //Assert
      expect(message).to.equal("Good morning!");
      done();
    });
  });

  describe("Good afternoon limite inferior", function() {
    it("return Good afternoon!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("EN");
      //Act
      let message = mesenger.getMessage(12, 0);
      //Assert
      expect(message).to.equal("Good afternoon!");
      done();
    });
  });

  describe("Good afternoon limite superior", function() {
    it("return Good afternoon!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("EN");
      //Act
      let message = mesenger.getMessage(17, 59);
      //Assert
      expect(message).to.equal("Good afternoon!");
      done();
    });
  });

  describe("Good nigth limite inferior", function() {
    it("return Good night!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("EN");
      //Act
      let message = mesenger.getMessage(18, 0);
      //Assert
      expect(message).to.equal("Good night!");
      done();
    });
  });

  describe("Good night limite superior", function() {
    it("return Good night!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("EN");
      //Act
      let message = mesenger.getMessage(23, 59);
      //Assert
      expect(message).to.equal("Good night!");
      done();
    });
  });
});
