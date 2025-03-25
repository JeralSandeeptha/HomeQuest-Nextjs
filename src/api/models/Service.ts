import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    service_name: {
        type: String,
        required: true
    },
    service_image: {
        type: String,
        required: true
    },
    service_start_price: {
        type: String,
        required: true
    },
    service_description: {
        type: String,
    },
}, {
    timestamps: true
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
