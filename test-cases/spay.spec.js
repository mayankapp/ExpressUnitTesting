const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('../controller/studentController');
const studentObj = new Student();

describe('----- Spay Check ------', function () {
    it('Test User Function', function () {
        expect(studentObj.userId()).to.equal(12);
    })

    it('User Function Count', function () {
        let spyObj = sinon.spy(studentObj, 'getInfo');
        studentObj.home(12);
        expect(spyObj.calledOnce).to.be.true;
        // expect(spyObj.calledTwice).to.be.true;
    })
})