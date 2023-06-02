import {
  DocumentType,
  getModelForClass,
  index,
  modelOptions,
  pre,
  prop,
  Ref,
  Severity,
} from "@typegoose/typegoose";
import { User } from "./user.model";

@pre<Video>("save", function (next) {
  this.id = this._id;
  next();
})
@index({ title: 1 })
@modelOptions({
  schemaOptions: {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Video {
  @prop()
  id: string;

  @prop({ unique: true, required: true })
  title: string;

  @prop()
  description: string;

  @prop({ required: true })
  category: string;

  @prop({ default: "default.png" })
  thumbnail: string;

  @prop({ required: true })
  url: string;

  @prop({ ref: () => User })
  likes: Ref<User>[];

  @prop({ required: true })
  familyName: string[];

  @prop()
  keywords: string[];
}

const VideoModel = getModelForClass(Video);
export default VideoModel;
