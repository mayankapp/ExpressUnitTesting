const { default: axios } = require('axios');

class Student {
    
    home(type) {
        let data = this.getInfo(type, 1);
        // this.getInfo(type, 2);
        return data + 5;
    }
    userId() {
        return 12;
    }
    getInfo(type, status) {
        return type;
    }
    finalMarks(total) {
        this.getExternal(total);
        let external = this.getExternal(total);
        let internal = this.getInternal(total);
        let finalSum = external + internal + 10;
        return finalSum;
    }
    getExternal(total) {
        return total + 1;
    }
    getInternal(total) {
        return total - 1;
    }
    async dbData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(10), 1000);
        });
    }
    // thirdPartyApi() {
    //     return new Promise((resolve, reject) => {
    //         axios.get('https://localhost/api/article-list').then((response) => {
    //             resolve(response);
    //         }).catch((error) => reject(error))
    //     });
    // }
}

module.exports = Student;