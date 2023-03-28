import { Schema, model } from 'mongoose';

const dogSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  description: String,
  url_image: String,
  phone: String,
});

const Dog = model('Dog', dogSchema);

export default Dog;
