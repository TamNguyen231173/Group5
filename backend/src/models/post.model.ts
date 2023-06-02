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

@pre<Post>("save", function (next) {
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
export class Post {
  @prop()
  id: string;

  @prop({ unique: true, required: true })
  title: string;

  @prop({ required: true })
  description: string;

  @prop({ default: "default.png" })
  image: string;

  @prop()
  images: string[];

  @prop({ ref: () => User })
  likes: Ref<User>[];

  @prop()
  habitat: string[];

  @prop()
  region: string[];

  @prop({ required: true })
  familyName: string[];

  @prop()
  keywords: string[];

  @prop({ default: false })
  rare: boolean;

  @prop({ ref: () => User })
  author: Ref<User>;
}

const postModel = getModelForClass(Post);
export default postModel;
