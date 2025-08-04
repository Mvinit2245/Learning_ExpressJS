const bcrypt = require('bcrypt')
const saltRounds = 10;

exports.generateHash = async (plainPassword) => {
    const hash = await bcrypt.hash(plainPassword, 10)
    return hash
} 

exports.verifyHash = async (plaintext, hash) => {
    const result = await bcrypt.compare(plaintext, hash)
    return result
} 

