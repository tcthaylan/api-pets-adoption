import { Schema, model, aws } from 'dynamoose'

aws.sdk.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

const PetsAdoptionSchema = new Schema({
  PartK: {
    type: String,
    hashKey: true
  },
  SK: {
    type: String,
    rangeKey: true
  },
  name: {
    type: String,
  },
  lastName: {
    type: String
  },
  password: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String,
    enum: ["M", "F"]
  },
  castrated: {
    type: Boolean,
  },
  vaccinated: {
    type: Boolean
  },
  species: {
    type: String
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  message: {
    type: String,
  },
  address: {
    type: Object,
    schema: {
      street: {
        type: String,
      },
      number: {
        type: Number,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipCode: {
        type: String,
      },
    }
  },
}, {
  timestamps: true,
})

export const PetsAdoption = model('PETS_ADOPTION', PetsAdoptionSchema, {
  update: true,
});