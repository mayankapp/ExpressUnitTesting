const userList = (req, res) => {
    try {
        return res.send("Welcome to the Homepage!!");
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({error: error.message});
    }
}

const newData = () => {
    return new Promise((resolve, reject) => {
        resolve({ otp: 9000 });
    });
}

const getUser = (req, res) => {
    try {
        let data = {
            name: "Mayank Tiwari",
            age: 26,
        }
        res.status(200).send({ statusText: 'success', data });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    userList,
    newData,
    getUser
}