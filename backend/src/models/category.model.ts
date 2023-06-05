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

@pre<Category>("save", function (next) {
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
export class Category {
  @prop()
  id: string;

  @prop({ unique: true, required: true })
  name: string;

  @prop()
  description: string;

  @prop({ required: true })
  type: string;
}

const CategoryModel = getModelForClass(Category);
export default CategoryModel;
