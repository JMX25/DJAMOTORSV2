const {Schema, model} = require('mongoose');

const VehicleSchema = new Schema({
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    vcc:{
        type:String,
        required:true
    },
    capacity:{
        type:String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Vehicle', VehicleSchema);