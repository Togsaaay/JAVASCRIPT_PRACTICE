const login = (req, res) => {
    const {username, password} = req.body 

    if (username == "admin" && password == "sample@gmail.com") {
        return res.json({message: "Valid Credentials!"})
    }
    return res.json({message: "Invalid Credentials!"})
}

module.exports = {login};