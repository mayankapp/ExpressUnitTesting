const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../index');

describe('#### Api Test ####', function () {
    it('Get All Company Api Test', (done) => {
        chai.request(server)
            .get('/user')
            .end((err, response) => {
                expect(response.status).to.be.equal(200);
                // expect(res.body).to.have.all.keys('name', 'age');
                done();
            }) 
    });
})