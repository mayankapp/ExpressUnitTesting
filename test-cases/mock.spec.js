const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('../controller/studentController');
const studentObj = new Student();

describe('----- Mock Check ------', function () {

    it('Mock Function Count Check', function () {
        var mock = sinon.mock(studentObj);
        var expt = mock.expects('getExternal');
        expt.exactly(2);
        expt.withArgs(40);
        studentObj.finalMarks(40);
        mock.verify()
    })
})