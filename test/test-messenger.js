var expect = require("chai").expect;
const Messenger = require("../lib/messenger");

describe("Messenger Español", function() {
  describe("Buenos dias limite inferior", function() {
    it("return ¡Buenos dias!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("ES");
      //Act
      let message = mesenger.getMessage(0, 0);
      //Assert
      expect(message).to.equal("¡Buenos dias!");
      done();
    });
  });

  describe("Buenos dias limite superior", function() {
    it("return ¡Buenos dias!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("ES");
      //Act
      let message = mesenger.getMessage(11, 59);
      //Assert
      expect(message).to.equal("¡Buenos dias!");
      done();
    });
  });

  describe("Buenas tardes limite inferior", function() {
    it("return ¡Buenas tardes!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("ES");
      //Act
      let message = mesenger.getMessage(12, 0);
      //Assert
      expect(message).to.equal("¡Buenas tardes!");
      done();
    });
  });

  describe("Buenas tardes limite superior", function() {
    it("return ¡Buenas tardes!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("ES");
      //Act
      let message = mesenger.getMessage(17, 59);
      //Assert
      expect(message).to.equal("¡Buenas tardes!");
      done();
    });
  });

  describe("Buenas noches limite inferior", function() {
    it("return ¡Buenas noches!", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("ES");
      //Act
      let message = mesenger.getMessage(18, 0);
      //Assert
      expect(message).to.equal("¡Buenas noches!");
      done();
    });
  });

  describe("Buenas noches limite superior", function() {
    it("return buenos noches exitoso en español", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("ES");
      //Act
      let message = mesenger.getMessage(23, 59);
      //Assert
      expect(message).to.equal("¡Buenas noches!");
      done();
    });
  });

  describe("Fecha Invalida", function() {
    it("return exception date invalid", function(done) {
      //Arrange
      let mesenger;
      mesenger = new Messenger("ES");
      //Act

      expect(function() {
        mesenger.getMessage("asdsads");
      }).to.throw("Hora Invalida");
      done();
    });
  });
});
