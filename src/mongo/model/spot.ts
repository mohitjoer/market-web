import { Schema, model, Document, models } from 'mongoose';


interface ISpotData extends Document {
  spotId: string;
  image: string;
  name: string;
  description: string;
  platform: string;
  contact: string;
  audienceType: string;
  spotLink: string;
  createduserid: string; 
  createdAt: Date;
  updatedAt: Date;
}

const spotSchema = new Schema<ISpotData>(
  {
    spotId: { type: String, required: true },
    image: { type: String},
    name: { type: String, required: true },
    description: { type: String, required: true },
    platform: { type: String, required: true },
    contact: { type: String, required: true },
    audienceType: { type: String, required: true },
    spotLink: { type: String, required: true },
    createduserid: { type: String, required: true }, 
  },
  {
    timestamps: true,
  }
);


const SpotData = models.SpotData || model<ISpotData>('SpotData', spotSchema);

export default SpotData;