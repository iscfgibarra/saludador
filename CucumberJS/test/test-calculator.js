var expect  = require('chai').expect;
const Calculator = require('../lib/calculator');
 


describe('Calcultaor', function() {
    describe ('Add numbers 1 and 2 should be 3', function() {
        it('status', function(done){

            //Arrange
            let calculator;
            calculator = new Calculator(1, 2);
            //Act
             calculator.add();
            let res = calculator.getResult();
            //Assert
            expect(res).to.equal(3);
             done();
        });

       
    });
 
});