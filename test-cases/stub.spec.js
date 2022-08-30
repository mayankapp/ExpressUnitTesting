const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('../controller/studentController');
const studentObj = new Student();

describe('----- Stub Check ------', function () {
    it('Stub Arguement Check', function () {
        let stub = sinon.stub(studentObj, 'getExternal');
        stub.withArgs(40).returns(5);
        expect(studentObj.finalMarks(40)).to.be.equal(54);
    })
})