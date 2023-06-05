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

  @prop({ required: true })
  images: string[];

  @prop({ ref: () => User })
  likes: Ref<User>[];

  @prop({ required: true, ref: () => Category })
  habitat: Ref<Category>;

  @prop({ required: true, ref: () => Category })
  region: Ref<Category>;

  @prop({ required: true, ref: () => Category })
  familyName: Ref<Category>;

  @prop()
  keywords: string[];

  @prop({ default: false })
  rare: boolean;

  @prop({ required: true, ref: () => User })
  author: Ref<User>;

  @prop({ default: 0 })
  views: number;
}

const postModel = getModelForClass(Post);
export default postModel;
