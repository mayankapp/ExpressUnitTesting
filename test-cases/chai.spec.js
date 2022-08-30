const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

//############ ASSERT ###############/

describe("Assert Check", function () {
    let username = "Mayank Tiwari";
    let myList = {
        item: [{
            id: 1,
            name: "Mayank Tiwari",
        }],
        title: "User List",
    }
    it('Assert String Match', function () {
        assert.typeOf(username, 'string');
    });
    it('Assert Equal Match', function () {
        assert.equal(username, 'Mayank Tiwari');
    });
    it('Assert Length Match', function () {
        assert.lengthOf(myList.item, 1);
    });
});


//######## Should #########
describe('Should Check', function(){
    let userName = "Mayank Tiwari";
    let mylist = {
        item: [{
            id: 1,
            name: "Mayank Tiwari",
        }],
        title: "User List",
    }
    it('Should String Match', function () {
       userName.should.be.a('string'); 
    });
    it('Should Equal Match', function () {
        userName.should.equal('Mayank Tiwari'); 
    });
    it('Should Length Match', function () {
        mylist.should.have.a.property('item').with.lengthOf(1); 
    });
    
});

//######## Expect ########
describe('Expect Check', function () {
    let userName = "Mayank Tiwari";
    let mylist = {
        item: [{
            id: 1,
            name: "Mayank Tiwari",
        }],
        title: "User List",
        address: {
            country: "India",
            phoneNo: ['9874678798', '8947979878']
        }
    }
    it('Expect String Match', function () {
        expect(userName).to.be.a('string');
    });

    it('Expect Equal Match', function () {
        expect(userName).to.equal('Mayank Tiwari');
    });
    it('Expect Length Match', function () {
        expect(userName).to.lengthOf(13);
    });
    it('Expect Check Object Length', function () {
        expect(mylist).to.have.a.property('item').with.a.lengthOf(1);
    });
    it('API Check Object Keys', function () {
        expect(mylist).to.have.a.all.keys('item', 'title', 'address');
    });
    it('API Check Phone Number inside Object', function () {
        expect(mylist).to.have.nested.property('address.phoneNo[0]');
    });
    it('API Check Country Name inside Object', function () {
        // expect(mylist).to.have.nested.property('address.country');
        // expect(mylist).to.have.nested.include({'address.country': "India"});
        expect(mylist).to.have.nested.include({'address.phoneNo[0]': "9874678798"});
    });
})  