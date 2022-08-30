const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('../controller/studentController');
const studentObj = new Student();
const userController = require('../controller/userController');
const chaiAsPromise = require('chai-as-promised');
chai.use(chaiAsPromise)

describe('----- Promise Check ------', function () {

    it('Promise Function Value Check', function (done) {
        // expect(studentObj.dbData()).to.be.equal(10);
        // this.timeout(2000);
        this.timeout(0);
        studentObj.dbData().then(function (result) {
            expect(result).to.be.equal(10);
            done();
        });
    
    });

    it('Chai Promise Function Check', function () {
        this.timeout(0);
        return expect(studentObj.dbData()).to.eventually.equal(10);    
    });

    it('Check OTP Value', function () {
        this.timeout(0);
        return expect(userController.newData()).to.eventually.have.deep.property('otp');    
    });
})