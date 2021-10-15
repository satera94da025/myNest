import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocement = Users & Document;

@Schema()
export class Users {
  @Prop()
  name: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
