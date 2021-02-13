const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true
    },
    password: {
        type: String,
        required : [true, "Please enter your password"]
    },
    role: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dsk9kfasr/image/upload/v1612940586/kissclipart-icon-name-svg-clipart-computer-icons-user-d5f11bae643dfd07_bsxlfa.jpg"
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Users", userSchema)