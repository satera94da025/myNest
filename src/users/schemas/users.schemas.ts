import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



export type UsersDocement = Users & Document;


@Schema()


export class Users {

  @Prop()
  name: string;
  @Prop()
  secondName: string;
  @Prop()
  email: string;
  @Prop()
  job: string;
  @Prop()
  age: number;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
