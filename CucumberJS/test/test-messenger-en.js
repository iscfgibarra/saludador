var expect = require("chai").expect;
const Messenger = require("../lib/messenger");

describe("Messenger Ingles", function() {
  describe("Good morning limite inferior", function() {
    it("return Good morning!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("EN");
      //Act
      let message = mesenger.getMessage(new Date(2020, 02, 11, 0, 0, 0));
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
      let message = mesenger.getMessage(new Date(2020, 02, 11, 11, 59, 59));
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
      let message = mesenger.getMessage(new Date(2020, 02, 11, 12, 0, 0));
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
      let message = mesenger.getMessage(new Date(2020, 02, 11, 17, 59, 59));
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
      let message = mesenger.getMessage(new Date(2020, 02, 11, 18, 0, 0));
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
      let message = mesenger.getMessage(new Date(2020, 02, 11, 23, 59, 59));
      //Assert
      expect(message).to.equal("Good night!");
      done();
    });
  });
});
