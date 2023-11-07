import mongoose from 'mongoose'

const Customer = new mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: Number, required: true },
}, {
    timestamps: true
});

Customer.index({
    email: 1
}, {
    unique: true
})
export default mongoose.model('Customer', Customer);