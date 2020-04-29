import BaseController from './base.controller';
import SecretEscapes from '../models/SecretEscapes';

class SecretEscapesController extends BaseController {
	whitelist = [ 'service', 'destination', 'price','day' ];

	insert = async (req, res, next) => {
		const params = this.filterParams(req.body, this.whitelist);
		let SecretEscapes1 = new SecretEscapes({
			...params
		});
		try {
			const savedSecretEscapes = await SecretEscapes1.save();
			return res.status(201).json({ message: 'success', SecretEscapes: savedSecretEscapes });
		} catch (err) {
			err.status = 400;
			next(err);
		}
	};

	update = async (req, res, next) => {
		const params = this.filterParams(req.body, this.whitelist);
		const SecretEscapesObj = {
			...params
		};
		try {
			const updatedSecretEscapes = await SecretEscapes.findByIdAndUpdate(
				{ _id: req.params.SecretEscapesId },
				{ $set: SecretEscapesObj },
				{ new: true }
			);
			if (!updatedSecretEscapes) {
				return res.status(400).json({ message: 'SecretEscapes Not Found!' });
			}
			return res.status(200).json({ message: 'SecretEscapes updated successfully!', SecretEscapes: updatedSecretEscapes });
		} catch (err) {
			if (err.kind == 'ObjectId') {
				return res.status(400).json({ message: 'SecretEscapes Not Found!' });
			}
			next(err);
		}
	};

	delete = async (req, res, next) => {
		try {
			const deletedSecretEscapes = await SecretEscapes.findByIdAndRemove({ _id: req.body.SecretEscapesId });
			if (!deletedSecretEscapes) {
				return res.status(400).json({ message: 'SecretEscapes Not Found!' });
			}
			return res.status(200).json({ message: 'SecretEscapes deleted successfully!', SecretEscapes: deletedSecretEscapes });
		} catch (err) {
			next(err);
		}
	};

	getAll = async (req, res, next) => {
		try {
			const SecretEscapess = await SecretEscapes.find({});
			if (!SecretEscapess) {
				return res.status(400).json({ message: 'SecretEscapes Not Found!' });
			}
			return res.status(200).json({ message: 'success', SecretEscapes: SecretEscapess });
		} catch (err) {
			next(err);
		}
	};
}

export default new SecretEscapesController();
