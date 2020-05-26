const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var promoSchema = new Schema({
	name:{
		type: String,
		required: true,
		unique: true
	},
	image:{
		type: String,
		required: true
	},
	label:{
		type: String,
	},
	price:{
		type: Currency,
		required: true
	},
	featured:{
		type: Boolean,
		default: false,
		required: true
	},
	description:{
		type: String,
		required: true
	}
});

var Promos = mongoose.model('promos',promoSchema);
module.exports = Promos;