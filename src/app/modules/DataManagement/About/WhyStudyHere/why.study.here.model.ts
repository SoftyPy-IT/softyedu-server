import mongoose, { Aggregate, Model, Query, Schema } from 'mongoose';
import { TWhyStudy } from './why.study.here.interface';

const WhyStudySchema: Schema<TWhyStudy> = new Schema<TWhyStudy>(
  {
    mission: [
      {
        title: {
          type: String,
          required: [true, 'Mission title is required'],
        },
        description: {
          type: String,
          required: [true, 'Mission description is required'],
        },
        image: {
          type: String,
          required: [true, 'Mission image is required'],
        },
        _id: false,
      },
    ],
    benefits: [
      {
        title: {
          type: String,
          required: [true, 'Benefits title is required'],
        },
        description: {
          type: String,
          required: [true, 'Benefits description is required'],
        },
        image: {
          type: String,
          required: [true, 'Benefits image is required'],
        },
        _id: false,
      },
    ],
  },
  {
    timestamps: true,
  },
);

// WhyStudySchema.pre<Query<TWhyStudy, TWhyStudy>>('find', function () {
//     this.where({
//         $or: [
//             { mission: { $exists: true, $ne: [] } },
//             { benefits: { $exists: true, $ne: [] } },
//         ],
//     });
// });

// WhyStudySchema.pre<Query<TWhyStudy, TWhyStudy>>('findOne', function () {
//     this.where({
//         $or: [
//             { mission: { $exists: true, $ne: [] } },
//             { benefits: { $exists: true, $ne: [] } },
//         ],
//     });
// });

// // Aggregate pipeline middleware to filter out documents with both empty arrays
// WhyStudySchema.pre<Aggregate<TWhyStudy>>('aggregate', function () {
//     const matchStage = {
//         $match: {
//             $or: [
//                 { mission: { $exists: true, $ne: [] } },
//                 { benefits: { $exists: true, $ne: [] } },
//             ],
//         },
//     };
//     this.pipeline().unshift(matchStage); // Add filter stage at the beginning of the pipeline
// });

const WhyStudy: Model<TWhyStudy> = mongoose.model<TWhyStudy>(
  'WhyStudy',
  WhyStudySchema,
);
export default WhyStudy;
