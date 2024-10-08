import { Schema, model } from "mongoose";
import { commonStringConstraints } from "../utils/helpers/schema.helper.js";

const assetSchema = new Schema(
  {
    assetName: commonStringConstraints,
    assetId: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    _id: false,
  }
);

const officeSchema = new Schema({
  businessId: {
    type: Schema.Types.ObjectId,
  },
  parentOfficeId: {
    type: Schema.Types.ObjectId,
  },
  subordinates: {
    type: [Schema.Types.ObjectId],
  },
  allSubordinates: {
    type: [Schema.Types.ObjectId],
  },
  officeName: commonStringConstraints,
  totalConsumptionKwh: {
    type: Number,
    default: 0,
  },
  totalConsumptionRupees: {
    type: Number,
    default: 0,
  },
  assets: [assetSchema],
});

const Office = model("Office", officeSchema);
export { Office };
