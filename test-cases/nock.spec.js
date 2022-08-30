const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Student = require('../controller/studentController');
const stdClass = new Student();
const nock = require('nock');

describe('----- Nock Test Suit ------', function () {
    // it('Covid Api Test', function (done) {
    //     const obj = { status: 'ok', statusCode: 200, data: [] };

    //     const apihit = nock('https://localhost/api')
    //     .get('/article-list')
    //     .reply(200, obj);
        
    //     stdClass.thirdPartyApi()
    //     .then(function (record) {
    //         expect(record).to.be.eql(obj);
    //         done();
    //     }).catch(error => {
    //         done( new Error('error: ' + error))
    //     });
        
    // });
})