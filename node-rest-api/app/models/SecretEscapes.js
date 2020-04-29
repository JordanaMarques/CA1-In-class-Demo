import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const secretSchema = new Schema({
	service: {
		type: String,
		required: [ true, 'Service is required' ]
	},
	destination: {
		type: String,
		required: [ true, 'Destination  is required' ]
	},
	price: {
		type: String,
		required: [ true, 'Price  is required' ]
	},
	day: {
		type: String,
		required: [ true, 'Day  is required' ]
	},
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const Sescapes = mongoose.model('sescapes', secretSchema);
export default Sescapes;
