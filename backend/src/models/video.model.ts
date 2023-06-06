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
import { Category } from "./category.model";

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

  @prop({ default: "default.png" })
  thumbnail: string;

  @prop({ required: true })
  url: string;

  @prop({ default: 0 })
  likes: number;

  @prop()
  keywords: string[];

  @prop({ required: true, ref: () => Category })
  familyName: Ref<Category>;

  @prop({ required: true, ref: () => Category })
  habitat: Ref<Category>;

  @prop({ required: true, ref: () => User })
  author: Ref<User>;
}

const VideoModel = getModelForClass(Video);
export default VideoModel;
